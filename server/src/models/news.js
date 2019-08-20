const { Schema, model } = require('mongoose');

const NewsSchema = new Schema({
  url: String,
  image: String,
  bannerImage: String,
  title: String,
  description: String,
  content: String
});

for (let attribute in NewsSchema.paths) {
  if (NewsSchema.paths[attribute].isRequired === undefined)
    NewsSchema.paths[attribute].required(true);
}

const News = model('News', NewsSchema);

module.exports = News;
