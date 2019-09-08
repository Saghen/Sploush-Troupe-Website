const { BadRequest, Conflict, NotFound } = require('fejl');

const config = require('Config');
const fs = require('fs').promises;
const pathExists = require('path-exists');
const path = require('path');

const validExtensions = ['.jpg', '.jpeg', '.png', '.webp'];

module.exports = class ImagesService {
  async insert(file, filename) {
    BadRequest.assert(file, 'An image must be provided in the upload');
    file.name = filename || file.name.toLowerCase();
    const extension = path.extname(file.name);

    BadRequest.assert(
      validExtensions.includes(extension),
      `The file must be one of the following extensions: ${validExtensions.join(
        ', '
      )}`
    );

    const newPath = path.join(
      config.get('images').path,
      '../uploads',
      file.name
    );

    Conflict.assert(
      !(await imageExists({ filename: file.name })),
      'File already exists'
    );

    const fileBuffer = await fs.readFile(file.path);
    await fs.writeFile(newPath, fileBuffer);
    await fs.unlink(file.path);
  }

  async get({ filename, size }) {
    BadRequest.assert(filename, 'The filename must be provided');

    const extension = path.extname(filename);
    const folder = path.join(config.get('images').path, filename);

    const exists = await imageExists({ filename, optimizedOnly: true });
    NotFound.assert(exists, 'Image not found');

    const baseFile = path.join(folder, `base${extension}`);
    let file = baseFile;
    if (size) file = path.join(folder, `${size}${extension}`);

    if (await pathExists(file)) return file;
    if (await pathExists(baseFile)) return baseFile;

    NotFound.assert(false, 'Image not found');
  }

  async list() {
    const files = await fs.readdir(config.get('images').path);
    return files;
  }

  async delete({ filename }) {
    BadRequest.assert(filename, 'A filename must be provided');
    const imagePath = path.join(config.get('images').path, filename);
    NotFound.assert(await pathExists(imagePath), 'Image not found');

    await fs.rmdir(imagePath);
  }
};

async function imageExists({ filename, optimizedOnly = false }) {
  let exists = await pathExists(path.join(config.get('images').path, filename));

  if (!optimizedOnly)
    exists =
      exists ||
      (await pathExists(
        path.join(config.get('images').path, '../uploads', filename)
      ));

  return exists;
}
