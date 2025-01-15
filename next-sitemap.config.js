const siteUrl = "https://www.wooglim.dev";

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
    ],
  },
  exclude: ["/note"], // /note를 sitemap에서 제외
  generateHost: false, // Host 디렉티브 생성을 비활성화
  additionalPaths: async (config) => [
    {
      loc: "/snippets", // 경로 추가
      changefreq: "daily", // 페이지 변경 빈도 (필요에 따라 조정)
      priority: 1.0, // SEO 우선 순위 (0.1~1.0)
    },
  ],
};
