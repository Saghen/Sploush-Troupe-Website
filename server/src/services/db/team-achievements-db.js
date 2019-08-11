const { TeamAchievement } = require('Models/team-achievement');
const sanitize = require('Helpers/sanitize');

module.exports = class TeamAchievementsDB {
  async get(team, id) {
    return team.achievements.id(id);
  }

  async insert(team, { title, place }) {
    const teamAchievement = new TeamAchievement(sanitize({ title, place }));
    team.achievements.push(teamAchievement);

    return team.save();
  }

  async update(team, achievementId, { title, place }) {
    const teamAchivement = team.achievements.id(achievementId);
    teamAchivement.set(sanitize({ title, place }));

    return team.save();
  }

  async delete(team, achievementId) {
    team.achievements.id(achievementId).remove();

    return team.save();
  }
};
