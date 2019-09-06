const { BadRequest, NotFound } = require('fejl');
const storeClient = new (require('Services/db/store-db'))();
const { isObjectId } = require('Helpers/validators');

module.exports = class StoreService {
  async get({ id }) {
    BadRequest.assert(isObjectId(id), 'A valid object ID must be provided');

    const storeItem = await storeClient.get({ id });
    NotFound.assert(storeItem, 'Store item not found');
    return storeItem;
  }

  async list() {
    return storeClient.list();
  }

  async insert(data) {
    try {
      await storeClient.insert(data);
    } catch (err) {
      BadRequest.assert(false, err.message);
    }
  }

  async update(id, data) {
    BadRequest.assert(isObjectId(id), 'A valid object ID must be provided');

    try {
      await storeClient.update(id, data);
    } catch (err) {
      BadRequest.assert(false, err.message);
    }
  }

  async delete(id) {
    BadRequest.assert(isObjectId(id), 'A valid object ID must be provided');
    const storeItem = await storeClient.delete(id);
    NotFound.assert(storeItem, 'Store item not found');
    return storeItem;
  }
};
