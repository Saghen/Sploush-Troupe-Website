const Application = require('Models/application');
const sanitize = require('Helpers/sanitize');

module.exports = class ApplicationDB {
  async get({ url, id }) {
    return Application.findOne(sanitize({ url, _id: id })).exec();
  }

  async list() {
    return Application.find().exec();
  }

  async insert({ url, name, content, description, applyUrl }) {
    if (await this.get({ url })) throw new Error('Url already exists');
    const application = new Application({
      url,
      name,
      content,
      description,
      applyUrl
    });
    await application.save();
    return application;
  }

  async update(id, data) {
    return Application.updateOne({ _id: id }, { $set: sanitize(data) });
  }

  async delete(id) {
    return Application.findByIdAndRemove(id).exec();
  }
};
