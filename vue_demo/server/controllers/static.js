// 静态资源文件

let Router = require('koa-router');
let fs = require('fs');
let path = require('path');

const static = new Router;

const getFils = (queryPath) => {
    const staticPath = path.join(__dirname, '../../dist', queryPath);

    return data = fs.readFileSync(staticPath);
};

static.get('(.+)\.css', async(ctx) => {
    const queryPath = ctx.originalUrl || ctx.path;
    getFils(queryPath);
    if (!data) {
        ctx.body = 404;
        return;
    }
    ctx.type = 'text/css';
    ctx.body = data.toString();
});

static.get('(.+)\.js', async(ctx) => {
    const queryPath = ctx.originalUrl || ctx.path;
    getFils(queryPath);
    if (!data) {
        ctx.body = 404;
        return;
    }
    ctx.type = 'text/js';
    ctx.body = data.toString();
});

module.exports = static;
