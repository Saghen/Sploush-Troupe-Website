const News = require('Models/news');
const sanitize = require('Helpers/sanitize');

module.exports = class NewsDB {
  async get(url) {
    return News.findOne({ url }).exec();
  }

  async list() {
    return News.find().exec();
  }

  async insert({ url, image, bannerImage, title, content, description }) {
    if (await this.get(url)) throw new Error('Url already exists');
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

  async update(oldUrl, data) {
    const query = sanitize(data);
    return News.updateOne({ url: oldUrl }, { $set: query });
  }

  async delete(url) {
    return News.findOneAndRemove({ url });
  }
};
