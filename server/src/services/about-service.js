const { BadRequest } = require('fejl');
const config = require('Config');
const fs = require('fs').promises;

module.exports = class NewsService {
  async get() {
    return fs.readFile(config.get('data').path);
  }

  async update(data) {
    BadRequest.assert(
      data.image && data.content,
      'Image and content must be provided'
    );

    const stringified = JSON.stringify(data);

    await fs.writeFile(config.get('data').path, stringified);
    return stringified;
  }
};
