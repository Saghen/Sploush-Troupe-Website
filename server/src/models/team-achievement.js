const { Schema, model } = require('mongoose');

const TeamAchievementSchema = new Schema({
  title: String,
  place: {
    type: Number,
    enum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
  }
});

for (let attribute in TeamAchievementSchema.paths) {
  if (TeamAchievementSchema.paths[attribute].isRequired === undefined)
    TeamAchievementSchema.paths[attribute].required(true);
}

const TeamAchievement = model('TeamAchievement', TeamAchievementSchema);

module.exports = { TeamAchievement, TeamAchievementSchema };
