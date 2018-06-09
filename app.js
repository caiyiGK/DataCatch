const Koa = require('koa'); // 导入 Koa
const bodyParser = require('koa-bodyparser');
global.App = {};
global.App.BaseClass = require('./lib/baseClass')
const router = require('./middleware/route-map');

const app = new Koa();  // 创建 Koa 对象表示 Web App 本身


app.use(bodyParser());
app.use(router.routes());  // 使用middleware:

// 端口监听
app.listen(3000);
console.log('app started at port 3000...');
