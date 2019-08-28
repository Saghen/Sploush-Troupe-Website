const { BadRequest, Conflict, NotFound } = require('fejl');
const applicationClient = new (require('Services/db/application-db'))();
const { urlIsValid, isObjectId } = require('Helpers/validators');

const assertInvalidUrl = BadRequest.makeAssert('Invalid URL Provided');

module.exports = class NewsService {
  async get({ url, id }) {
    BadRequest.assert(url || id, 'A url or id must be provided');
    if (url) assertInvalidUrl(urlIsValid(url));

    const newsItem = await applicationClient.get({ url, id });
    NotFound.assert(newsItem, 'Application not found');
    return newsItem;
  }

  async list() {
    return applicationClient.list();
  }

  async insert(data) {
    Conflict.assert(
      !(await applicationClient.get({ url: data.url })),
      'An application already has the provided url'
    );
    assertInvalidUrl(urlIsValid(data.url));

    try {
      await applicationClient.insert(data);
    } catch (err) {
      BadRequest.assert(false, err.message);
    }
  }

  async update(id, data) {
    if (data.url) {
      const conflictingNewsItem = await applicationClient.get({
        url: data.url
      });
      Conflict.assert(
        !conflictingNewsItem || conflictingNewsItem._id.toString() === id,
        'An application already has the provided url'
      );
    }

    BadRequest.assert(isObjectId(id), 'A valid object ID must be provided');

    // TODO: Check if failed

    try {
      await applicationClient.update(id, data);
    } catch (err) {
      BadRequest.assert(false, err.message);
    }
  }

  async delete(id) {
    BadRequest.assert(isObjectId(id), 'A valid object ID must be provided');
    const newsItem = await applicationClient.delete(id);
    NotFound.assert(newsItem, 'Application not found');
    return newsItem;
  }
};
