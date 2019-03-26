
// server.js文件

let Koa = require('koa');
let Router = require('koa-router');

let cors = require('koa-cors');
const pages = require('./controllers/pages');
const resource = require('./controllers/resource');
const bodyParser = require('koa-better-body');

const app = new Koa();
const router = new Router();

router.use('/',
    bodyParser({
        jsonLimit: '2mb'
    }),
    pages.routes(),
    resource.routes()
)

// 将koa和两个中间件连起来
app.use(router.routes());
app.use(router.allowedMethods());

// 监听3000端口
app.listen(3000);