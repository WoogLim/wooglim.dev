const siteUrl = "https://www.wooglim.dev";

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", disallow: "/note" },
      { userAgent: "*", allow: "/" },
    ],
  },
  exclude: ["/note"],
};
