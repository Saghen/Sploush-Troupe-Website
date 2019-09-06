const storeClient = new (require('Services/store-service'))();
const { jwtMiddleware } = require('Helpers/auth');

const Router = require('koa-router');
const router = new Router();

router.prefix('/store');

router.get('/get', async ctx => {
  ctx.ok(await storeClient.get(ctx.query));
});

router.get('/list', async ctx => {
  ctx.ok(await storeClient.list());
});

router.post('/insert', jwtMiddleware(), async ctx => {
  const body = ctx.request.body;
  const storeItem = await storeClient.insert(body);
  ctx.ok(storeItem);
});

router.post('/update', jwtMiddleware(), async ctx => {
  const body = ctx.request.body;
  const storeItem = await storeClient.update(body.id, {
    ...body,
    id: undefined
  });
  ctx.ok(storeItem);
});

router.post('/delete', jwtMiddleware(), async ctx => {
  ctx.ok(await storeClient.delete(ctx.request.body.id));
});

module.exports = router;
