const { BadRequest, Conflict, NotFound } = require('fejl');
const { urlIsValid, isObjectId } = require('Helpers/validators');

const TeamsDB = require('Services/db/teams-db');
const teamsClient = new TeamsDB();

const AchievementsDB = require('Services/db/team-achievements-db');
const achievementsClient = new AchievementsDB();

const MembersDB = require('Services/db/team-members-db');
const membersClient = new MembersDB();

const assertInvalidUrl = BadRequest.makeAssert('Invalid URL Provided');

module.exports = class TeamsService {
  async get(url) {
    BadRequest.assert(url, 'A url must be provided');
    assertInvalidUrl(urlIsValid(url));

    const team = await teamsClient.get(url);
    NotFound.assert(team, 'Team not found');
    return team;
  }

  async list() {
    return teamsClient.list();
  }

  async insert({ url, image }) {
    Conflict.assert(
      !(await teamsClient.get(url)),
      'A team already has the provided url'
    );
    BadRequest.assert(url && image, 'A url and image must be provided');
    assertInvalidUrl(urlIsValid(url));
    return teamsClient.insert({ url, image });
  }

  async update(oldUrl, data) {
    Conflict.assert(
      !(await teamsClient.get(data.url)),
      'A team already has the provided url'
    );
    assertInvalidUrl(urlIsValid(oldUrl));

    // TODO: Check if failed

    return teamsClient.update(oldUrl, data);
  }

  async delete(url) {
    BadRequest.assert(url, 'A url must be provided');
    assertInvalidUrl(urlIsValid(url));
    const streamer = await teamsClient.delete(url);
    NotFound.assert(streamer, 'Team not found');
    return streamer;
  }

  async achievementsInsert({ teamUrl, title, place }) {
    BadRequest.assert(teamUrl, 'A teamUrl must be provided');
    assertInvalidUrl(urlIsValid(teamUrl));

    const team = await this.get(teamUrl);

    BadRequest.assert(title && place, 'A title and place must be provided');
    BadRequest.assert(typeof place === 'number', 'The place must be a number');

    return achievementsClient.insert(team, { title, place });
  }

  async achievementsUpdate({ teamUrl, achievementId, title, place }) {
    BadRequest.assert(teamUrl, 'A teamUrl must be provided');
    assertInvalidUrl(urlIsValid(teamUrl));

    const team = await this.get(teamUrl);

    BadRequest.assert(
      isObjectId(achievementId),
      'achievementId must be a mongodb object id'
    );

    BadRequest.assert(title && place, 'A title and place must be provided');
    BadRequest.assert(typeof place === 'number', 'The place must be a number');

    return achievementsClient.update(team, achievementId, { title, place });
  }

  async achievementsDelete({ teamUrl, achievementId }) {
    BadRequest.assert(teamUrl, 'A teamUrl must be provided');
    assertInvalidUrl(urlIsValid(teamUrl));

    const team = await this.get(teamUrl);

    BadRequest.assert(
      isObjectId(achievementId),
      'achievementId must be a mongodb object id'
    );

    NotFound.assert(
      await achievementsClient.get(team, achievementId),
      'The achievement was not found'
    );

    return achievementsClient.delete(team, achievementId);
  }

  async membersInsert({ teamUrl, gamerTag, name, image }) {
    BadRequest.assert(teamUrl, 'A teamUrl must be provided');
    assertInvalidUrl(urlIsValid(teamUrl));

    const team = await this.get(teamUrl);

    BadRequest.assert(
      gamerTag && name && image,
      'A gamerTag, name, and image must be provided'
    );

    return membersClient.insert(team, { gamerTag, name, image });
  }

  async membersUpdate({ teamUrl, memberId, gamerTag, name, image }) {
    BadRequest.assert(teamUrl, 'A teamUrl must be provided');
    assertInvalidUrl(urlIsValid(teamUrl));

    const team = await this.get(teamUrl);

    BadRequest.assert(
      isObjectId(memberId),
      'memberId must be a mongodb object id'
    );

    BadRequest.assert(
      gamerTag || name || image,
      'A gamerTag, name, or image must be provided'
    );

    return membersClient.update(team, memberId, { gamerTag, name, image });
  }

  async membersDelete({ teamUrl, memberId }) {
    BadRequest.assert(teamUrl, 'A teamUrl must be provided');
    assertInvalidUrl(urlIsValid(teamUrl));

    const team = await this.get(teamUrl);

    BadRequest.assert(
      isObjectId(memberId),
      'membertId must be a mongodb object id'
    );

    NotFound.assert(
      await membersClient.get(team, memberId),
      'The member was not found'
    );

    return membersClient.delete(team, memberId);
  }
};
