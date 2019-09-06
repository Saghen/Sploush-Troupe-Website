const { Schema, model } = require('mongoose');

const StoreitemSchema = new Schema({
  image: String,
  url: String
});

for (let attribute in StoreitemSchema.paths) {
  if (StoreitemSchema.paths[attribute].isRequired === undefined)
    StoreitemSchema.paths[attribute].required(true);
}

const StoreItem = model('StoreItem', StoreitemSchema);

module.exports = StoreItem;
