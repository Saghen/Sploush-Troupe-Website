const { Schema, model } = require('mongoose');

const StreamerSchema = new Schema({
  id: String,
  name: String,
  description: String,
  youtubeId: {
    type: String,
    required: false
  },
  twitterHandle: {
    type: String,
    required: false
  },
  twitchId: String
});

for (let attribute in StreamerSchema.paths) {
  if (attribute.isRequired === undefined) {
    if (typeof attribute === 'string')
      attribute = { type: attribute, isRequired: true };
    else attribute.isRequried = true;
  }
}

const Streamer = model('Streamer', StreamerSchema);

module.exports = Streamer;
