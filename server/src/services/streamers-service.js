const { BadRequest, NotFound } = require('fejl');
const { isObjectId } = require('Helpers/validators');

const StreamersDB = require('Services/db/streamers-db');
const streamersClient = new StreamersDB();

const assertInvalidId = BadRequest.makeAssert('Invalid id Provided');

module.exports = class TeamsService {
  async get(id) {
    BadRequest.assert(id, 'An id must be provided');
    assertInvalidId(isObjectId(id));

    let streamer = await streamersClient.get(id);
    streamer = {
      ...streamer.toObject(),
      twitchProfile: await streamer.getTwitchProfile()
    };

    NotFound.assert(streamer, 'Streamer not found');
    return streamer;
  }

  async list() {
    let streamers = await streamersClient.list();

    const promises = [];
    for (let i = 0; i < streamers.length; i++) {
      const index = i; // because closures and stuff
      if (await streamers[i].getTwitchProfileCache())
        streamers[i] = {
          ...streamers[i].toObject(),
          twitchProfile: await streamers[i].getTwitchProfileCache()
        };
      else
        promises.push(
          streamers[index].getTwitchProfile().then(
            val =>
              (streamers[index] = {
                ...streamers[index].toObject(),
                twitchProfile: val
              })
          )
        );
    }
    await Promise.all(promises);

    return streamers;
  }

  async insert({ name, description, youtubeUrl, twitterHandle, twitchId }) {
    BadRequest.assert(
      name && description && twitchId,
      'A name, description and twitchId must be provided'
    );

    return streamersClient.insert({
      name,
      description,
      youtubeUrl,
      twitterHandle,
      twitchId
    });
  }

  async update(id, { name, description, youtubeUrl, twitterHandle, twitchId }) {
    BadRequest.assert(id, 'An id must be provided');
    assertInvalidId(isObjectId(id));

    BadRequest.assert(
      name || description || youtubeUrl || twitterHandle || twitchId,
      'A name, description, twitchId, youtubeUrl, or twitterHandle must be provided'
    );

    const streamer = await streamersClient.get(id);
    NotFound.assert(streamer, 'Streamer not found');

    // TODO: Check if failed

    return streamersClient.update(streamer, {
      name,
      description,
      youtubeUrl,
      twitterHandle,
      twitchId
    });
  }

  async delete(id) {
    BadRequest.assert(id, 'An id must be provided');
    assertInvalidId(isObjectId(id));

    const streamer = await streamersClient.delete(id);
    NotFound.assert(streamer, 'Team not found');
    return streamer;
  }
};
