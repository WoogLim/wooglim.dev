import matter from "gray-matter";
import { join } from "path";
import fs from "fs";

type Items = {
  // 각 게시물에는 문자열값을 가지는 매개변수 키가 있음.
  [key: string]: string;
};

type Post = {
  data: {
    // 각 게시물에는 문자열값을 가지는 매개변수 키가 있음.
    [key: string]: string;
  };
  // 각 게시물은 매개변수 키와 연결된 게시물 컨텐츠가 포함됨
  content: string;
};

// 게시물 경로내 목록 파일 가져오기
const POSTS_PATH = join(process.cwd(), "_posts", "post");

function getPostFilePaths(): string[] {
  return (
    // 걱 MDX 게시물 경로 반환
    fs.readdirSync(POSTS_PATH).filter((path) => /\.mdx?$/.test(path))
  );
}

// 게시물 단건(상세) 조회
export function getPost(slug: string): Post {
  // 해당 포스트(slug) 경로 조회
  const fullPath = join(POSTS_PATH, `${slug}.mdx`);
  // 포스트 컨텐츠 utf-8 인코딩 방식으로 변경
  const fileContents = fs.readFileSync(fullPath, "utf-8");
  // 머리글 YAML 데이터 및 게시글 내용 가져오기
  const { data, content } = matter(fileContents);
  // 데이터 및 게시글 내용 반환
  return { data, content };
}

// 게시글 아이템 정리
export function getPostItems(filePath: string, fields: string[] = []): Items {
  // mdx 파일 경로 slug 생성
  const slug = filePath.replace(/\.mdx?$/, "");
  // matter 데이터(데이터, 게시글) 가져오기
  const { data, content } = getPost(slug);

  const items: Items = {};

  // 필요 콘텐츠 로드
  fields.forEach((field) => {
    // slug 로드
    if (field === "slug") {
      items[field] = slug;
    }
    // 게시글 내용 로드
    if (field === "content") {
      items[field] = content;
    }
    // 지정한 데이터 필드가 있는지 확인
    if (data[field]) {
      // 있다면 적재
      items[field] = data[field];
    }
  });

  return items;
}

// 모든 포스트 가져오기
export function getAllPosts(fields: string[]): Items[] {
  // 모든 포스트의 경로 가져오기
  const filePaths = getPostFilePaths();
  // 위 filePaths의 포스트를 날짜별로 sort하여 가져오기
  const posts = filePaths
    .map((filePath) => getPostItems(filePath, fields))
    .sort((post1, post2) => (post1.date < post2.date ? 1 : -1));
  return posts;
}

// 관련 태그의 포스트 목록 가져오기
export function getSimilarPosts(
  fields: string[],
  tagName: string,
  postNumber: string
): Items[] {
  // 모든 포스트의 경로 가져오기
  const filePaths = getPostFilePaths();
  // 위 filePaths의 포스트를 날짜별로 sort하여 가져오기
  const posts = filePaths
    .map((filePath) => getPostItems(filePath, fields))
    .sort((post1, post2) => (post1.date < post2.date ? 1 : -1))
    .filter((post) => post.tag === tagName && post.postnumber !== postNumber)
    .slice(0, 3);
  return posts;
}
