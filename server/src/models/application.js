const { Schema, model } = require('mongoose');

const ApplicationSchema = new Schema({
  name: String,
  url: String,
  description: String,
  content: String,
  applyUrl: String
});

for (let attribute in ApplicationSchema.paths) {
  if (ApplicationSchema.paths[attribute].isRequired === undefined)
    ApplicationSchema.paths[attribute].required(true);
}

const Application = model('Application', ApplicationSchema);

module.exports = Application;
