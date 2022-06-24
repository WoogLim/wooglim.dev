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
    url: meta.url,
    title: "wooglim.dev",
    site_name: "wooglim.dev",
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
