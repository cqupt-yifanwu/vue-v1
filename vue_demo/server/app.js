
// server.js文件

let Koa = require('koa');
let Router = require('koa-router');

let cors = require('koa-cors');
// 引入modejs的文件系统API
let fs = require('fs');
let path = require('path');

const app = new Koa();
const router = new Router();

// 提供一个/getJson接口
router
    .get('/getJson', async ctx => {
        const mockPath = path.join(__dirname, '..', '/mock/server.json');
        console.log(mockPath);
        // 后端允许cors跨域请求
        await cors();
        // 返回给前端的数据
        ctx.body = JSON.parse(fs.readFileSync(mockPath));
    
    });

// 将koa和两个中间件连起来
app.use(router.routes()).use(router.allowedMethods());

// 监听3000端口
app.listen(3000);