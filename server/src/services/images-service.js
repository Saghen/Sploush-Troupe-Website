const { BadRequest, Conflict, NotFound } = require('fejl');

const config = require('Config');
const fs = require('fs').promises;
const path = require('path');

const send = require('koa-send');

module.exports = class ImagesService {
  async insert(file) {
    BadRequest.assert(file, 'An image must be provided in the upload');

    file.name = file.name.toLowerCase();

    const newPath = path.join(
      config.get('images').path,
      '../uploads',
      file.name
    );

    if (await imageExists({ filename: file.name }))
      return ctx.conflict('File already exists');

    const fileBuffer = await fs.readFile(file.path);
    await fs.writeFile(newPath, fileBuffer);
    await fs.unlink(file.path);

    ctx.ok('Successfully uploaded image');
  }

  async get({ filename, size }) {
    BadRequest.assert(filename, 'The filename must be provided');

    const extension = path.extname(filename);
    const folder = path.join(config.get('images').path, filename);

    const exists = await imageExists({ filename, optimizedOnly: true })
    NotFound.assert(exists, 'Image not found')

    let file;
    if (size) file = path.join(folder, `${size}${extension}`);
    else file = path.join(folder, `base${extension}`);

    try {
      await fs.access(file);
      return file;
    } catch (err) {
      NotFound.assert(false, 'Image not found');
    }
  }
};

async function imageExists({ filename, optimizedOnly = false }) {
  try {
    await fs.access(path.join(config.get('images').path, filename));
    return true;
  } catch (err) {}

  if (!optimizedOnly) {
    try {
      await fs.access(
        path.join(config.get('images').path, '../uploads', filename)
      );
      return true;
    } catch (err) {}
  }

  return false;
}
