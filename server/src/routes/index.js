const KoaRouter = require('koa-router');
const router = new KoaRouter();

const requireDir = require('require-dir');

let apiRouters = requireDir('./api', { extensions: ['.js'] });

for (const apiRouter of Object.values(apiRouters)) {
  router.use(apiRouter.routes());
  router.use(apiRouter.allowedMethods());
}

module.exports = router;
