const { Schema, model } = require('mongoose');

const { TeamMemberSchema } = require('Models/team-member');
const { TeamAchievementSchema } = require('Models/team-achievement');

const TeamSchema = new Schema({
  url: String,
  image: String,
  members: [TeamMemberSchema],
  achievements: [TeamAchievementSchema]
});

for (let attribute in TeamSchema.paths) {
  if (attribute.isRequired === undefined) {
    if (typeof attribute === 'string')
      attribute = { type: attribute, isRequired: true };
    else attribute.isRequried = true;
  }
}

const Team = model('Team', TeamSchema);

module.exports = Team;
