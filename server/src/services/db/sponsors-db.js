const Sponsor = require('Root/models/sponsor');
const sanitize = require('Helpers/sanitize');

module.exports = class StoreDB {
  async get({ id }) {
    return Sponsor.findOne(sanitize({ _id: id })).exec();
  }

  async list() {
    return Sponsor.find().exec();
  }

  async insert({ url, logoImage, image, content }) {
    const sponsor = new Sponsor({ url, logoImage, image, content });
    await sponsor.save();
    return sponsor;
  }

  async update(id, data) {
    return Sponsor.updateOne({ _id: id }, { $set: sanitize(data) });
  }

  async delete(id) {
    return Sponsor.findByIdAndRemove(id).exec();
  }
};
