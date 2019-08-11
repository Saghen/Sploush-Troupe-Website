const { Schema, model } = require('mongoose');

const TeamAchievementSchema = new Schema({
  title: String,
  place: {
    type: Number,
    enum: [1, 2, 3]
  }
});

for (let attribute in TeamAchievementSchema.paths) {
  if (attribute.isRequired === undefined) {
    if (typeof attribute === 'string')
      attribute = { type: attribute, isRequired: true };
    else attribute.isRequried = true;
  }
}

const TeamAchievement = model('TeamAchievement', TeamAchievementSchema);

module.exports = { TeamAchievement, TeamAchievementSchema };
