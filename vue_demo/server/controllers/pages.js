// 页面路由文件

let Router = require('koa-router');
let fs = require('fs');
let path = require('path');

const pages = new Router;

pages.get('/', async(ctx) => {
    const filePath = path.join(__dirname, '../../', 'dist', 'index.html');
    
    let data = fs.readFileSync(filePath);
    if (!data) {
        ctx.body = 404;
        return;
    }
    ctx.type = 'text/html';
    ctx.body = data.toString();

});

module.exports = pages;
