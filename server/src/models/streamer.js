const { Schema, model } = require('mongoose');

const config = require('Config');
const NodeCache = require('node-cache');
const twitchCache = new NodeCache({
  stdTTL: config.get('twitch').cacheTTL
});

const twitchClient = require('twitch').default.withClientCredentials(
  config.get('twitch').clientId,
  config.get('twitch').clientSecret
);

const StreamerSchema = new Schema({
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

StreamerSchema.methods.getTwitchProfile = async function() {
  if (this.getTwitchProfileCache()) return this.getTwitchProfileCache();

  let twitchProfile = await twitchClient.helix.streams.getStreamByUserName(
    this.twitchId
  );
  if (twitchProfile) twitchProfile = twitchProfile._data;
  else twitchProfile = { type: '' };

  this.storeTwitchProfile(twitchProfile);
  return twitchProfile;
};

StreamerSchema.methods.storeTwitchProfile = function(twitchProfile) {
  twitchProfile.lastUpdate = new Date();

  twitchCache.set(this.twitchId, twitchProfile);
};

StreamerSchema.methods.getTwitchProfileCache = function() {
  const cachedTwitchProfile = twitchCache.get(this.twitchId);
  if (cachedTwitchProfile) return cachedTwitchProfile;
};

for (let attribute in StreamerSchema.paths) {
  if (StreamerSchema.paths[attribute].isRequired === undefined)
    StreamerSchema.paths[attribute].required(true);
}

const Streamer = model('Streamer', StreamerSchema);

module.exports = Streamer;
