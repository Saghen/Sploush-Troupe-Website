const { BadRequest, NotFound } = require('fejl');
const { isObjectId } = require('Helpers/validators');

const StreamersDB = require('Services/db/streamers-db');
const streamersClient = new StreamersDB();

const assertInvalidId = BadRequest.makeAssert('Invalid id Provided');

module.exports = class TeamsService {
  async get(id) {
    BadRequest.assert(id, 'An id must be provided');
    assertInvalidId(isObjectId(id));

    const streamer = await streamersClient.get(id);
    NotFound.assert(streamer, 'Streamer not found');
    return streamer;
  }

  async list() {
    return streamersClient.list();
  }

  async insert({ name, description, youtubeId, twitterHandle, twitchId }) {
    BadRequest.assert(
      name && description && twitchId,
      'A name, description and twitchId must be provided'
    );

    return streamersClient.insert({
      name,
      description,
      youtubeId,
      twitterHandle,
      twitchId
    });
  }

  async update(id, { name, description, youtubeId, twitterHandle, twitchId }) {
    BadRequest.assert(id, 'An id must be provided');
    assertInvalidId(isObjectId(id));

    BadRequest.assert(
      name || description || youtubeId || twitterHandle || twitchId,
      'A name, description, twitchId, youtubeId, or twitterHandle must be provided'
    );

    const streamer = await streamersClient.get(id);
    NotFound.assert(streamer, 'Streamer not found');

    // TODO: Check if failed

    return streamersClient.update(streamer, {
      name,
      description,
      youtubeId,
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
