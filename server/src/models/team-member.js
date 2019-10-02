const { Schema, model } = require('mongoose');

const TeamMemberSchema = new Schema({
  gamerTag: String,
  name: String,
  image: String,
  position: String,
  youtubeUrl: {
    type: String,
    required: false
  },
  twitterHandle: {
    type: String,
    required: false
  },
  twitchId: {
    type: String,
    required: false
  },
  instagramHandle: {
    type: String,
    required: false
  }
});

for (let attribute in TeamMemberSchema.paths) {
  if (TeamMemberSchema.paths[attribute].isRequired === undefined)
    TeamMemberSchema.paths[attribute].required(true);
}

const TeamMember = model('TeamMember', TeamMemberSchema);

module.exports = { TeamMemberSchema, TeamMember };
