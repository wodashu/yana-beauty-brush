# YANA B2B 上线设置

## 已完成

- B2B 英文获客首页
- OEM/ODM、私人品牌、产品目录、生产流程、质量控制和询价模块
- `/admin/` 内容后台入口
- 产品图片、描述、MOQ、材质及视频链接字段
- Cloudflare Pages Functions 询盘接口
- Cloudflare D1 询盘数据表结构
- Cloudflare Web Analytics 兼容

## 首次上线

1. 在 GitHub 用户 `wodashu` 下创建公开或私有仓库 `yana-beauty-brush`。
2. 将本目录全部内容上传到仓库根目录。
3. 在 Cloudflare Dashboard 进入 Workers & Pages，连接该 GitHub 仓库。
4. 构建设置留空，输出目录填写 `/`。
5. 部署成功后，在 Pages 项目中添加 `yanabeautybrush.com` 和 `www.yanabeautybrush.com`。
6. 在 Pages 项目的 Metrics 中启用 Web Analytics。

## 询盘数据库

1. 在 Cloudflare D1 创建数据库 `yana-inquiries`。
2. 执行 `schema.sql`。
3. 在 Pages 项目 Settings > Bindings 中添加 D1 绑定，变量名必须为 `DB`。

## 内容后台

后台地址为 `https://yanabeautybrush.com/admin/`。配置已指向仓库 `wodashu/yana-beauty-brush`。正式登录前还需创建 GitHub OAuth App，并部署 CMS OAuth Worker 到 `auth.yanabeautybrush.com`；Client ID 和 Client Secret 只保存在 Cloudflare 环境变量中，不能写入网站文件。

## 访客统计

Cloudflare Pages 项目 > Metrics > Web Analytics 中点击 Enable。部署后可查看每日访客、页面浏览、国家/地区、来源及页面性能。

## 注意

- `sales@yanabeautybrush.com` 需要在域名邮件服务中创建或转发。
- 上传到 GitHub 的单个视频应保持较小；较大视频建议上传 YouTube/Vimeo 后在后台填写链接。
- 网站中关于工厂、认证、生产能力和交期的声明必须在真实供应链确认后再发布。
