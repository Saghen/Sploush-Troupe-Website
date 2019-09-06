const { Schema, model } = require('mongoose');

const SponsorSchema = new Schema({
  url: String,
  logoImage: String,
  image: String,
  content: String
});

for (let attribute in SponsorSchema.paths) {
  if (SponsorSchema.paths[attribute].isRequired === undefined)
    SponsorSchema.paths[attribute].required(true);
}

const Sponsor = model('Sponsor', SponsorSchema);

module.exports = Sponsor;
