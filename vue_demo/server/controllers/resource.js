// 资源接口文件路由
let Router = require('koa-router');
// 引入modejs的文件系统API
let fs = require('fs');
let path = require('path');

const resource = new Router();

// 提供一个/getJson接口
resource.get('/getJson', async ctx => {
    const mockPath = path.join(__dirname, '..', '/mock/server.json');
    console.log(mockPath);
    // 后端允许cors跨域请求
    await cors();
    // 返回给前端的数据
    ctx.body = JSON.parse(fs.readFileSync(mockPath));
});

module.exports = resource;
