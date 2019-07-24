const config = require('Config');
const fs = require('fs').promises;
const path = require('path');

const send = require('koa-send');

const Router = require('koa-router');
const router = Router();

router.prefix('/images');

router.all('*', async (ctx, next) => {
  await next();
  if (ctx.status === 404) ctx.notFound({ message: 'Image not found' });
});

router.get('/:file', async (ctx, next) => {
  const filename = ctx.params.file;
  const extension = path.extname(filename);

  // TODO: Remove old extension code if path works better
  // const extension = (filename.match(/\.([^.]*?)(?=\?|#|$)/) || [])[1];

  const folder = path.join(config.images.imagesPath, filename);

  if (!(await fs.exists(folder))) return next();

  let file;
  if (ctx.query.size) {
    // TODO: Check if path.extname returns the dot or not
    file = path.join(folder, `${ctx.query.size}.${extension}`);
    if (!(await fs.exists(file))) file = path.join(folder, `base.${extension}`);
  } else file = path.join(folder, `base.${extension}`);

  if (!(await fs.exists(file))) return next();

  await send(ctx, file, { root: '/' });
});

module.exports = router;
