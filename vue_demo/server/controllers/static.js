// 静态资源文件

let Router = require('koa-router');
let fs = require('fs');
let path = require('path');

const static = new Router;

const getFiles = (ctx, queryPath, type) => {
    const staticPath = path.join(__dirname, '../../dist', queryPath);

    const data = fs.readFileSync(staticPath);

    if (!data) {
        ctx.body = 404;
        return;
    }
    ctx.type = `text/${type}`;
    ctx.body = data.toString();
};

static.get('(.+)\.css', async(ctx) => {
    const queryPath = ctx.originalUrl || ctx.path;
    getFiles(ctx, queryPath, 'css');
});

static.get('(.+)\.js', async(ctx) => {
    const queryPath = ctx.originalUrl || ctx.path;
    getFiles(ctx, queryPath, 'js');
});

module.exports = static;
