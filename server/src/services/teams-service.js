const { BadRequest, Conflict, NotFound } = require('fejl');
const { urlIsValid, isObjectId } = require('Helpers/validators');

const TeamsDB = require('Services/db/teams-db');
const teamsClient = new TeamsDB();

const assertInvalidUrl = BadRequest.makeAssert('Invalid URL Provided');

module.exports = class TeamsService {
  async get({ id, url }) {
    BadRequest.assert(url || id, 'An id or url must be provided');

    if (id) BadRequest.assert(isObjectId(id), 'Invalid ID provided');
    if (url) assertInvalidUrl(urlIsValid(url));

    const team = await teamsClient.get({ id, url });
    NotFound.assert(team, 'Team not found');
    return team;
  }

  async list() {
    return teamsClient.list();
  }

  async insert({ url, image, members, achievements }) {
    Conflict.assert(
      !(await teamsClient.get(url)),
      'A team already has the provided url'
    );
    BadRequest.assert(url && image, 'A url and image must be provided');
    assertInvalidUrl(urlIsValid(url));
    return teamsClient.insert({ url, image, members, achievements });
  }

  async update(id, data) {
    if (data.url) {
      assertInvalidUrl(urlIsValid(data.url));
      const conflictingTeam = await teamsClient.get({ url: data.url });
      Conflict.assert(
        !conflictingTeam || conflictingTeam._id.toString() === id,
        'A team already has the provided url'
      );
    }

    const team = await teamsClient.get({ id });

    // TODO: Check if failed

    return teamsClient.update(team, data);
  }

  async delete({ id }) {
    BadRequest.assert(isObjectId(id), 'Invalid ID provided');
    const team = await teamsClient.delete(id);
    NotFound.assert(team, 'Team not found');
    return team;
  }
};
