const teamsClient = new (require('Services/teams-service'))();

const Router = require('koa-router');
const router = new Router();

router.prefix('/teams');

router.get('/get', async ctx => {
  ctx.ok(await teamsClient.get(ctx.query));
});

router.get('/list', async ctx => {
  ctx.ok(await teamsClient.list());
});

router.post('/insert', async ctx => {
  const team = await teamsClient.insert(ctx.request.body);
  ctx.ok(team);
});

router.post('/update', async ctx => {
  const body = ctx.request.body;
  const team = await teamsClient.update(body.id, body);
  ctx.ok(team);
});

router.post('/delete', async ctx => {
  ctx.ok(await teamsClient.delete(ctx.request.body.url));
});

module.exports = router;
