const { Schema, model } = require('mongoose');

const { TeamMemberSchema } = require('Models/team-member');
const { TeamAchievementSchema } = require('Models/team-achievement');

const TeamSchema = new Schema({
  title: String,
  url: String,
  image: String,
  members: [TeamMemberSchema],
  achievements: [TeamAchievementSchema]
});

for (let attribute in TeamSchema.paths) {
  if (TeamSchema.paths[attribute].isRequired === undefined)
    TeamSchema.paths[attribute].required(true);
}
const Team = model('Team', TeamSchema);

module.exports = Team;
