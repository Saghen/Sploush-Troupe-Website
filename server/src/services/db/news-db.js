const News = require('Models/news');
const sanitize = require('Helpers/sanitize');

module.exports = class NewsDB {
  async get({ url, id }) {
    let _id = id;
    return News.findOne(sanitize({ url, _id })).exec();
  }

  async list() {
    return News.find().exec();
  }

  async insert({ url, image, bannerImage, title, content, description }) {
    if (await this.get({ url })) throw new Error('Url already exists');
    const newsItem = new News({
      url,
      image,
      bannerImage,
      title,
      content,
      description
    });
    await newsItem.save();
    return newsItem;
  }

  async update(id, data) {
    return News.updateOne({ _id: id }, { $set: sanitize(data) });
  }

  async delete(id) {
    return News.findByIdAndRemove(id).exec();
  }
};
