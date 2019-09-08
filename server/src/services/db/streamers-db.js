const Streamer = require('Models/streamer');
const sanitize = require('Helpers/sanitize');

module.exports = class TeamDB {
  async get(id) {
    const streamer = await Streamer.findById(id).exec();
    return streamer;
  }

  async list() {
    const streamer = await Streamer.find().exec();
    return streamer;
  }

  async insert(streamerData) {
    const streamer = new Streamer(sanitize(streamerData));
    await streamer.save();

    return streamer;
  }

  async update(streamer, streamerData) {
    const query = sanitize(streamerData);
    streamer.name = query.name || streamer.name;
    streamer.description = query.description || streamer.description;
    streamer.youtubeUrl = query.youtubeUrl || streamer.youtubeUrl;
    streamer.twitterHandle = query.twitterHandle || streamer.twitterHandle;
    streamer.twitchId = query.twitchId || streamer.twitchId;

    return streamer.save();
  }

  async delete(id) {
    return Streamer.findByIdAndRemove(id).exec();
  }
};
