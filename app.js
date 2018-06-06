// 导入 Koa
const Koa = require('koa');

// 创建 Koa 对象表示 Web App 本身
const app = new Koa();
 
app.use(async (ctx, next) => {
    await next();
    ctx.response.type = 'text/html';
    ctx.response.body = '<h1>Hello, Koa2</h1>';
})

// 端口监听
app.listen(3000);
console.log('app started at port 3000...');
