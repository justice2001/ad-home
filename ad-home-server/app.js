import apiRouter from './core/router/api'
import Koa from 'koa'
import KoaStatic from 'koa-static'
import { init } from './core/Init'

const app = new Koa()

// Init Core
init(app)

// Request Log
app.use(async (ctx, next) => {
  await next();
  const respTime = ctx.response.get('X-Response-Time')
  console.log(`${ctx.method}: ${ctx.URL} - ${respTime}`);
});

// Calc Response Time And Add To Header
app.use(async (ctx, next) => {
const start = Date.now();
await next();
const ms = Date.now() - start;
ctx.set('X-Response-Time', `${ms}ms`);
});

// Static Resource
app.use(KoaStatic(__dirname + '/public'))

// Router
app.use(apiRouter.routes())

app.listen(3000)