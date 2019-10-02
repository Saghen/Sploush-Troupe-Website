const newsClient = new (require('Services/news-service'))();
const { jwtMiddleware } = require('Helpers/auth');

const Router = require('koa-router');
const router = new Router();

router.prefix('/news');

router.get('/get', async ctx => {
  ctx.ok(await newsClient.get(ctx.query));
});

router.get('/list', async ctx => {
  ctx.ok((await newsClient.list()).reverse());
});

router.post('/insert', jwtMiddleware(), async ctx => {
  const body = ctx.request.body;
  const newsItem = await newsClient.insert(body);
  ctx.ok(newsItem);
});

router.post('/update', jwtMiddleware(), async ctx => {
  const body = ctx.request.body;
  const newsItem = await newsClient.update(body.id, { ...body, id: undefined });
  ctx.ok(newsItem);
});

router.post('/delete', jwtMiddleware(), async ctx => {
  ctx.ok(await newsClient.delete(ctx.request.body.id));
});

module.exports = router;
