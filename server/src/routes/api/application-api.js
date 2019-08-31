const applicationClient = new (require('Services/application-service'))();
const { jwtMiddleware } = require('Helpers/auth');

const Router = require('koa-router');
const router = new Router();

router.prefix('/applications');

router.get('/get', async ctx => {
  ctx.ok(await applicationClient.get(ctx.query));
});

router.get('/list', async ctx => {
  ctx.ok(await applicationClient.list());
});

router.post('/insert', jwtMiddleware(), async ctx => {
  const body = ctx.request.body;
  const newsItem = await applicationClient.insert(body);
  ctx.ok(newsItem);
});

router.post('/update', jwtMiddleware(), async ctx => {
  const body = ctx.request.body;
  const newsItem = await applicationClient.update(body.id, {
    ...body,
    id: undefined
  });
  ctx.ok(newsItem);
});

router.post('/delete', jwtMiddleware(), async ctx => {
  ctx.ok(await applicationClient.delete(ctx.request.body.id));
});

module.exports = router;
