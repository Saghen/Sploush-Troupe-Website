const sponsorClient = new (require('Services/sponsors-service'))();
const { jwtMiddleware } = require('Helpers/auth');

const Router = require('koa-router');
const router = new Router();

router.prefix('/sponsors');

router.get('/get', async ctx => {
  ctx.ok(await sponsorClient.get(ctx.query));
});

router.get('/list', async ctx => {
  ctx.ok(await sponsorClient.list());
});

router.post('/insert', jwtMiddleware(), async ctx => {
  const body = ctx.request.body;
  const sponsor = await sponsorClient.insert(body);
  ctx.ok(sponsor);
});

router.post('/update', jwtMiddleware(), async ctx => {
  const body = ctx.request.body;
  const sponsor = await sponsorClient.update(body.id, {
    ...body,
    id: undefined
  });
  ctx.ok(sponsor);
});

router.post('/delete', jwtMiddleware(), async ctx => {
  ctx.ok(await sponsorClient.delete(ctx.request.body.id));
});

module.exports = router;
