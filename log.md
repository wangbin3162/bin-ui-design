# 组件编写规则说明

1. 去npm 网站创建令牌
2. 配.npmrc
3. 退出登录npm logout
4. 验证配置
5. npm publish

```bash
# 验证环境变量
echo $NPM_TOKEN | head -c 20

# 验证 .npmrc 配置
cat ~/.npmrc

# 测试认证
npm whoami
# 成功时应显示你的 npm 用户名
```
