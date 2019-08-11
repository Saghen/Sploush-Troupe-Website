const Team = require('Models/team');
const sanitize = require('Helpers/sanitize');

module.exports = class TeamDB {
  async get(url) {
    const team = await Team.findOne({ url }).exec();
    return team;
  }

  async list() {
    const team = await Team.find().exec();
    return team;
  }

  async insert({ url, image }) {
    if (await this.get(url)) throw new Error('Url already exists');

    const team = new Team(sanitize({ url, image }));
    await team.save();

    return team;
  }

  async update(team, { url, image }) {
    const query = sanitize({ url, image });
    team.url = query.url || team.url;
    team.image = query.image || team.image;

    return team.save();
  }

  async delete(url) {
    return Team.findOneAndRemove({ url });
  }
};
