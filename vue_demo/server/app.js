
// server.js文件

let Koa = require('koa');
let Router = require('koa-router');

let cors = require('koa-cors');
const pages = require('./controllers/pages');
const resource = require('./controllers/resource');
const static = require('./controllers/static');
const bodyParser = require('koa-better-body');

const app = new Koa();
const router = new Router();

// app.use(bodyParser());

router.use('/',
    resource.routes(),
    static.routes(),
    pages.routes()
)

app.use(cors());

// 将koa和两个中间件连起来
app.use(router.routes());
app.use(router.allowedMethods());

app.on('error', (err, ctx) => {
    console.log(err)
});

// 监听3000端口
app.listen(3000);