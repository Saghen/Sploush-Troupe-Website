const streamersClient = new (require('Services/streamers-service'))();

const Router = require('koa-router');
const router = new Router();

router.prefix('/streamers');

router.get('/get', async ctx => {
  ctx.ok(await streamersClient.get(ctx.query.id));
});

router.get('/list', async ctx => {
  ctx.ok(await streamersClient.list());
});

router.post('/insert', async ctx => {
  const team = await streamersClient.insert(ctx.request.body);
  ctx.ok(team);
});

router.post('/update', async ctx => {
  const body = ctx.request.body;
  const team = await streamersClient.update(body.id, body);
  ctx.ok(team);
});

router.post('/delete', async ctx => {
  ctx.ok(await streamersClient.delete(ctx.request.body.id));
});

module.exports = router;
