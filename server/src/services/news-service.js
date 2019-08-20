const { BadRequest, Conflict, NotFound } = require('fejl');
const newsClient = new (require('Services/db/news-db'))();
const { urlIsValid, isObjectId } = require('Helpers/validators');

const assertInvalidUrl = BadRequest.makeAssert('Invalid URL Provided');

module.exports = class NewsService {
  async get({ url, id }) {
    BadRequest.assert(url || id, 'A url or id must be provided');
    if (url) assertInvalidUrl(urlIsValid(url));

    const newsItem = await newsClient.get({ url, id });
    NotFound.assert(newsItem, 'News item not found');
    return newsItem;
  }

  async list() {
    return newsClient.list();
  }

  async insert(data) {
    Conflict.assert(
      !(await newsClient.get({ url: data.url })),
      'A news item already has the provided url'
    );
    assertInvalidUrl(urlIsValid(data.url));

    try {
      await newsClient.insert(data);
    } catch (err) {
      BadRequest.assert(false, err.message);
    }
  }

  async update(id, data) {
    if (data.url) {
      const conflictingNewsItem = await newsClient.get({ url: data.url });
      Conflict.assert(
        !conflictingNewsItem || conflictingNewsItem._id.toString() === id,
        'A news item already has the provided url'
      );
    }

    BadRequest.assert(isObjectId(id), 'A valid object ID must be provided');

    // TODO: Check if failed

    try {
      await newsClient.update(id, data);
    } catch (err) {
      BadRequest.assert(false, err.message);
    }
  }

  async delete(id) {
    BadRequest.assert(isObjectId(id), 'A valid object ID must be provided');
    const newsItem = await newsClient.delete(id);
    NotFound.assert(newsItem, 'News item not found');
    return newsItem;
  }
};
