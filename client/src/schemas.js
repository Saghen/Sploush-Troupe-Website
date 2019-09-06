export const NewsSchema = {
  endpoint: "/news",
  params: [
    {
      type: "url",
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

export const ApplicationsSchema = {
  endpoint: "/applications",
  params: [
    {
      type: "url",
      name: "url",
      large: true
    },
    {
      name: "name",
      large: true
    },
    {
      name: "description",
      type: "editor"
    },
    {
      name: "content",
      type: "editor"
    },
    {
      name: "applyUrl"
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
      name: "title",
      large: true
    },
    {
      type: "url",
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

export const AboutSchema = {
  endpoint: "/about",
  params: [
    {
      name: "image",
      large: true
    },
    {
      name: "content",
      type: "editor"
    }
  ]
};

export const StoreItemSchema = {
  endpoint: "/store",
  params: [
    {
      name: "url",
      large: true
    },
    {
      name: "image",
      large: true
    }
  ]
};

export const SponsorSchema = {
  endpoint: "/sponsors",
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
      name: "logoImage",
      large: true
    },
    {
      name: "content",
      type: "editor"
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
    case "application":
      return ApplicationsSchema;
    case "about":
      return AboutSchema;
    case "sponsor":
      return SponsorSchema;
    case "store-item":
      return StoreItemSchema;
    default:
      throw new Error(`No schema found with name: ${schema}`);
  }
}
