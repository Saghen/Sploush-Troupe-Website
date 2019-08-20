const Team = require('Models/team');
const sanitize = require('Helpers/sanitize');

module.exports = class TeamDB {
  async get({ id, url }) {
    const team = await Team.findOne(sanitize({ _id: id, url })).exec();
    return team;
  }

  async list() {
    const team = await Team.find().exec();
    return team;
  }

  async insert({ url, image, members, achievements }) {
    if (await this.get(url)) throw new Error('Url already exists');

    const team = new Team(sanitize({ url, image, members, achievements }));
    await team.save();

    return team;
  }

  async update(team, { url, image, members, achievements }) {
    const query = sanitize({ url, image, members, achievements });
    team.url = query.url || team.url;
    team.image = query.image || team.image;
    team.members = query.members || team.members;
    team.achievements = query.achievements || team.achievements;

    return team.save();
  }

  async delete(id) {
    return Team.findByIdAndRemove(id).exec();
  }
};
