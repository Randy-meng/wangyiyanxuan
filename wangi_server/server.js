let Koa = require('koa')
let KoaRouter = require('koa-router');


const app = new Koa();
const router = new KoaRouter();


let demoData = require('./datas/demo');
let deomIndex = require('./datas/index');
let deomcateNavDatas = require('./datas/cateNavDatas');
let deomindexCateModule = require('./datas/indexCateModule');
let deomcateLists = require('./datas/cateLists');
let deompubu = require('./datas/pubu.json');
let deomlanjiazai = require('./datas/lanjiazai.json');


router.get('/demo', (ctx, next) => {
  ctx.body = demoData
});
router.get('/index', (ctx, next) => {
  ctx.body = deomIndex
});
router.get('/cateNavDatas', (ctx, next) => {
  ctx.body = deomcateNavDatas
});
router.get('/indexCateModule', (ctx, next) => {
  ctx.body = deomindexCateModule
});
router.get('/cateLists', (ctx, next) => {
  ctx.body = deomcateLists
});
router.get('/pubu', (ctx, next) => {
  ctx.body = deompubu
});
router.get('/lanjiazai', (ctx, next) => {
  ctx.body = deomlanjiazai
});


app
  .use(router.routes())
  .use(router.allowedMethods())



app.listen('3001', () => {
  console.log('服务器地址: http://localhost:3001');
})
