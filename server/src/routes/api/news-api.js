const newsClient = new (require('Services/news-service'))();

const Router = require('koa-router');
const router = new Router();

router.prefix('/news');

router.get('/get', async ctx => {
  ctx.ok(await newsClient.get(ctx.query.url));
});

router.get('/list', async ctx => {
  ctx.ok(await newsClient.list());
});

router.post('/insert', async ctx => {
  const body = ctx.request.body;
  const newsItem = await newsClient.insert(body);
  ctx.ok(newsItem);
});

router.post('/update', async ctx => {
  const body = ctx.request.body;
  const newsItem = await newsClient.update(body.oldUrl, body);
  ctx.ok(newsItem);
});

router.delete('/delete', async ctx => {
  ctx.ok(await newsClient.delete(ctx.query.url));
});

module.exports = router;
