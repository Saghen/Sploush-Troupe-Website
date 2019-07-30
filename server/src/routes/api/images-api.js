const config = require('Config');
const fs = require('fs').promises;
const path = require('path');

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

router.post('/insert', async ctx => {
  await imagesClient.insert(ctx.request.files.image);

  ctx.ok('Successfully uploaded image');
});

router.get('/:file', async (ctx, next) => {
  const path = await imagesClient.get({ filename: ctx.params.file, size: ctx.query.size})

  await send(ctx, path, { root: '/' });
});

module.exports = router;
