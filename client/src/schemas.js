export const NewsSchema = {
  endpoint: "/news",
  params: [
    {
      name: "url",
      large: true
    },
    {
      name: "title",
      large: true
    },
    {
      name: "description",
      type: "editor"
    },
    {
      name: "image",
      type: "image"
    },
    {
      name: "bannerImage",
      type: "image"
    },
    {
      name: "content",
      type: "editor"
    }
  ]
};

export const StreamerSchema = {
  endpoint: "/streamers",
  params: [
    {
      name: "name",
      large: true
    },
    {
      name: "twitchId",
      large: true
    },
    {
      name: "description",
      type: "editor"
    },
    {
      name: "twitterHandle"
    },
    {
      name: "youtubeId"
    }
  ]
};

export const TeamMemberSchema = {
  endpoint: "/teams/members",
  params: [
    {
      name: "gamerTag"
    },
    {
      name: "name"
    },
    {
      name: "image"
    }
  ]
};

export const TeamAchievementSchema = {
  endpoint: "/teams/achievements",
  params: [
    {
      name: "title"
    },
    {
      name: "place",
      type: "number",
      max: 3,
      min: 1
    }
  ]
};

export const TeamSchema = {
  endpoint: "/teams",
  params: [
    {
      name: "url",
      large: true
    },
    {
      name: "image",
      large: true
    },
    {
      name: "members",
      type: "array",
      schema: TeamMemberSchema
    },
    {
      name: "achievements",
      type: "array",
      schema: TeamAchievementSchema
    }
  ]
};

export default function getSchema(schema) {
  switch (schema) {
    case "news":
      return NewsSchema;
    case "streamer":
      return StreamerSchema;
    case "team":
      return TeamSchema;
    case "team-member":
      return TeamMemberSchema;
    case "team-achievement":
      return TeamAchievementSchema;
    default:
      throw new Error(`No schema found with name: ${schema}`);
  }
}
