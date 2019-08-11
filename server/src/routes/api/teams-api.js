const teamsClient = new (require('Services/teams-service'))();

const Router = require('koa-router');
const router = new Router();

router.prefix('/teams');

router.get('/get', async ctx => {
  ctx.ok(await teamsClient.get(ctx.query.url));
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
  const team = await teamsClient.update(body.oldUrl, body);
  ctx.ok(team);
});

router.post('/delete', async ctx => {
  ctx.ok(await teamsClient.delete(ctx.request.body.url));
});

router.post('/achievements/insert', async ctx => {
  const team = await teamsClient.achievementsInsert(ctx.request.body);
  ctx.ok(team);
});

router.post('/achievements/update', async ctx => {
  const team = await teamsClient.achievementsUpdate(ctx.request.body);
  ctx.ok(team);
});

router.post('/achievements/delete', async ctx => {
  ctx.ok(await teamsClient.achievementsDelete(ctx.request.body));
});

router.post('/members/insert', async ctx => {
  const team = await teamsClient.membersInsert(ctx.request.body);
  ctx.ok(team);
});

router.post('/members/update', async ctx => {
  const team = await teamsClient.membersUpdate(ctx.request.body);
  ctx.ok(team);
});

router.post('/members/delete', async ctx => {
  ctx.ok(await teamsClient.membersDelete(ctx.request.body));
});

module.exports = router;
