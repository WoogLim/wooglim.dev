import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

export const postsDirectory = join(process.cwd(), "_posts", "post");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export type PostFieldsType =
  | "slug"
  | "title"
  | "date"
  | "author"
  | "content"
  | "ogImage"
  | "coverImage";

export type PostType = {
  slug: string;
  title: string;
  date: Date;
  author: {
    name: string;
    picture: string;
  };
  content: string;
  ogImage: string;
  coverImage: string;
};

export function getPostBySlug(
  slug: string,
  fields: PostFieldsType[] = []
): PostType {
  // .mdx 제거
  const realSlug = slug.replace(/\.mdx$/, "");
  // 포스트 mdx 파일이 있는 경로와 realSlug(목표 파일이름) 합쳐서 fullPath 만듦
  const fullPath = join(postsDirectory, `${realSlug}.mdx`);
  // 만든 fullPath로 파일 read
  const fileContents = fs.readFileSync(fullPath, "utf8");
  // .mdx 파일의 헤더쪽 --- 파싱해서 data에 나머지 내용은 content
  const { data, content } = matter(fileContents);

  // @ts-ignore
  const items: PostType = {};

  // 필요한 최소데이터만 노출되게끔 fields 파라미터에 입력된 것만 넣는다.
  fields.forEach((field) => {
    switch (field) {
      case "slug":
        // @ts-ignore
        items[field] = realSlug;
        break;
      case "content":
        // @ts-ignore
        items[field] = content;
        break;
      default:
        if (typeof data[field] !== "undefined") {
          // @ts-ignore
          items[field] = data[field];
        }
        break;
    }
  });

  return items;
}

export function getAllPosts(fields: PostFieldsType[] = []) {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  // date descending order로 sort

  return posts;
}
