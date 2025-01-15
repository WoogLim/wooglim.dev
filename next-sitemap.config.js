const siteUrl = "https://www.wooglim.dev";

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
    ],
  },
  generateHost: false,
  additionalPaths: async (config) => [
    {
      loc: "/snippets",
      changefreq: "daily",
      priority: 1.0,
    },
  ],
};
