const siteUrl = "https://www.wooglim.dev";

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        disallow: ["/note"], // /note만 비허용
      },
    ],
  },
  exclude: ["/note"], // /note를 sitemap에서 제외
  generateHost: false, // Host 디렉티브 생성을 비활성화
};
