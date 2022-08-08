const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
    ctx.body = 'Hello World';
});

console.info('server at locahost:3000')
app.listen(3000);
