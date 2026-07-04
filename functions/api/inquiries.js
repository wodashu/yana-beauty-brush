export async function onRequestPost({request,env}){
  try{
    const d=await request.json();
    for(const k of ['name','email','company','country','message']) if(!String(d[k]||'').trim()) return Response.json({error:'Missing required field'},{status:400});
    if(!env.DB) return Response.json({error:'Inquiry database is not configured'},{status:503});
    await env.DB.prepare('INSERT INTO inquiries (created_at,name,email,company,country,quantity,type,message,status) VALUES (?,?,?,?,?,?,?,?,?)').bind(new Date().toISOString(),d.name,d.email,d.company,d.country,d.quantity||'',d.type||'',d.message,'new').run();
    return Response.json({ok:true});
  }catch{return Response.json({error:'Invalid request'},{status:400})}
}
