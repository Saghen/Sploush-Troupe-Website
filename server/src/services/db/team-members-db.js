const { TeamMember } = require('Models/team-member');
const sanitize = require('Helpers/sanitize');

module.exports = class TeamMembersDB {
  async get(team, id) {
    return team.members.id(id);
  }

  async insert(team, { gamerTag, name, image }) {
    const teamMember = new TeamMember(sanitize({ gamerTag, name, image }));
    team.members.push(teamMember);

    return team.save();
  }

  async update(team, memberId, { gamerTag, name, image }) {
    const teamMember = team.members.id(memberId);
    teamMember.set(sanitize({ gamerTag, name, image }));

    return team.save();
  }

  async delete(team, memberId) {
    team.members.id(memberId).remove();

    return team.save();
  }
};
