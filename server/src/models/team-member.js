const { Schema, model } = require('mongoose');

const TeamMemberSchema = new Schema({
  gamerTag: String,
  name: String,
  image: String
});

for (let attribute in TeamMemberSchema.paths) {
  if (attribute.isRequired === undefined) {
    if (typeof attribute === 'string')
      attribute = { type: attribute, isRequired: true };
    else attribute.isRequried = true;
  }
}

const TeamMember = model('TeamMember', TeamMemberSchema);

module.exports = { TeamMemberSchema, TeamMember };
