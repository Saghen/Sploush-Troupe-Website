const aboutClient = new (require('Services/about-service'))();
const { jwtMiddleware } = require('Helpers/auth');

const Router = require('koa-router');
const router = new Router();

router.prefix('/about');

router.get('/get', async ctx => {
  ctx.ok(await aboutClient.get());
});

router.post('/update', jwtMiddleware(), async ctx => {
  const body = ctx.request.body;
  const aboutData = await aboutClient.update(body);
  ctx.ok(aboutData);
});
module.exports = router;
