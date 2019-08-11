const { BadRequest, Conflict, NotFound } = require('fejl');
const newsClient = new (require('Services/db/news-db'))();
const { urlIsValid } = require('Helpers/validators');

const assertInvalidUrl = BadRequest.makeAssert('Invalid URL Provided');

module.exports = class NewsService {
  async get(url) {
    BadRequest.assert(url, 'A url must be provided');
    assertInvalidUrl(urlIsValid(url));

    const newsItem = await newsClient.get(url);
    NotFound.assert(newsItem, 'News item not found');
    return newsItem;
  }

  async list() {
    return newsClient.list();
  }

  async insert(data) {
    Conflict.assert(
      !(await newsClient.get(data.url)),
      'A news item already has the provided url'
    );
    assertInvalidUrl(urlIsValid(data.url));
    return newsClient.insert(data);
  }

  async update(oldUrl, data) {
    Conflict.assert(
      !(await newsClient.get(data.url)),
      'A news item already has the provided url'
    );
    assertInvalidUrl(urlIsValid(oldUrl));

    // TODO: Check if failed

    return newsClient.update(oldUrl, data);
  }

  async delete(url) {
    assertInvalidUrl(urlIsValid(url));
    const newsItem = await newsClient.delete(url);
    NotFound.assert(newsItem, 'News item not found');
    return newsItem;
  }
};
