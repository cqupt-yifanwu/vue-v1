// 资源接口文件路由

let Router = require('koa-router');
let fs = require('fs');
let path = require('path');
let cors = require('koa-cors');

// todo 根据 process.env.NODE_ENV 来区分生产环境

const resource = new Router();

// 提供一个/getJson接口
resource.all('api/getJson', async(ctx) => {
    const mockPath = path.join(__dirname, '../..', '/mock/server.json');
    // 返回给前端的数据
    ctx.body = JSON.parse(fs.readFileSync(mockPath));
});

resource.get('api/login', async(ctx) => {
    ctx.body = {
        msg: '',
        login: true
    }
})

module.exports = resource;
