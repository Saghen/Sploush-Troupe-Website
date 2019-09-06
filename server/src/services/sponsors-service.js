const { BadRequest, NotFound } = require('fejl');
const sponsorsClient = new (require('Services/db/sponsors-db'))();
const { isObjectId } = require('Helpers/validators');

module.exports = class SponsorsService {
  async get({ id }) {
    BadRequest.assert(isObjectId(id), 'A valid object ID must be provided');

    const sponsor = await sponsorsClient.get({ id });
    NotFound.assert(sponsor, 'Sponsor not found');
    return sponsor;
  }

  async list() {
    return sponsorsClient.list();
  }

  async insert(data) {
    try {
      await sponsorsClient.insert(data);
    } catch (err) {
      BadRequest.assert(false, err.message);
    }
  }

  async update(id, data) {
    BadRequest.assert(isObjectId(id), 'A valid object ID must be provided');

    try {
      await sponsorsClient.update(id, data);
    } catch (err) {
      BadRequest.assert(false, err.message);
    }
  }

  async delete(id) {
    BadRequest.assert(isObjectId(id), 'A valid object ID must be provided');
    const sponsor = await sponsorsClient.delete(id);
    NotFound.assert(sponsor, 'Sponsor not found');
    return sponsor;
  }
};
