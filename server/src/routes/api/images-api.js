const { BadRequest } = require('fejl');
const { jwtMiddleware } = require('Helpers/auth');

const send = require('koa-send');

const ImagesService = require('Services/images-service');
const imagesClient = new ImagesService();

const Router = require('koa-router');
const router = Router();

router.prefix('/images');

router.all('*', async (ctx, next) => {
  await next();
  if (ctx.status === 404) ctx.notFound('Image not found');
});

router.post('/insert', jwtMiddleware(), async ctx => {
  BadRequest.assert(
    ctx.request.files && ctx.request.files.image,
    'An image must be provided'
  );

  const filename = ctx.request.body && ctx.request.body.filename;

  await imagesClient.insert(ctx.request.files.image, filename);

  ctx.ok('Successfully uploaded image');
});

router.post('/delete', jwtMiddleware(), async ctx => {
  await imagesClient.delete(ctx.query);
  ctx.ok('Successfully deleted image');
});

router.get('/list', async ctx => {
  ctx.ok(await imagesClient.list());
});

router.get('/:file', async (ctx, next) => {
  const path = await imagesClient.get({
    filename: ctx.params.file,
    size: ctx.query.size
  });

  await send(ctx, path, { root: '/' });
});

module.exports = router;
