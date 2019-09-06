const StoreItem = require('Root/models/store-item');
const sanitize = require('Helpers/sanitize');

module.exports = class StoreDB {
  async get({ id }) {
    return StoreItem.findOne(sanitize({ _id: id })).exec();
  }

  async list() {
    return StoreItem.find().exec();
  }

  async insert({ image, url }) {
    const storeItem = new StoreItem({ image, url });
    await storeItem.save();
    return storeItem;
  }

  async update(id, data) {
    return StoreItem.updateOne({ _id: id }, { $set: sanitize(data) });
  }

  async delete(id) {
    return StoreItem.findByIdAndRemove(id).exec();
  }
};
