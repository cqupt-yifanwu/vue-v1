// 页面路由文件

let Router = require('koa-router');

const pages = new Router;

pages.get('/', async(ctx) => {
    ctx.body = '这里是模拟数据，到时候应该将vue产出入口放在这里'
});

module.exports = pages;
