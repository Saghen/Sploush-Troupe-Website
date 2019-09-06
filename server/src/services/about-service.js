const { BadRequest } = require('fejl');
const config = require('Config');
const fs = require('fs').promises;

const path = require('path');
const fileName = 'about.json';
const filePath = path.join(config.get('data').path, fileName);

module.exports = class NewsService {
  async get() {
    console.log(filePath);
    return fs.readFile(filePath);
  }

  async update(data) {
    BadRequest.assert(
      data.image && data.content,
      'Image and content must be provided'
    );

    const stringified = JSON.stringify(data);

    await fs.writeFile(filePath, stringified);
    return stringified;
  }
};
