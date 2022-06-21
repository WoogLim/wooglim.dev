import { meta } from "./metadata"; 

export const Seo = {
  titleTemplate: "%s | wooglim dev blog",
  name: meta.name,
  title: meta.title,
  description: meta.description,
  canonical: meta.url,
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "wooglim.dev",
    title: "IT 잡부의 블로그",
    site_name: "wooglim dev blog",
    images: [
      {
        url: meta.imageUrl,
        width: 1280,
        height: 720,
        alt: "wooglim.dev",
      },
    ],
  },
};
