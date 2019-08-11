const { Schema, model } = require('mongoose');

const NewsSchema = new Schema({
  url: String,
  image: String,
  bannerImage: String,
  title: String,
  descriptions: String,
  content: String
});

for (let attribute in NewsSchema.paths) {
  if (attribute.isRequired === undefined) {
    if (typeof attribute === 'string')
      attribute = { type: attribute, isRequired: true };
    else attribute.isRequried = true;
  }
}

const News = model('News', NewsSchema);

module.exports = News;
