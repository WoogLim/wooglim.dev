import matter from "gray-matter";
import { join } from "path";
import fs from "fs";

type Items = {
  [key: string]: string;
};

type Snippet = {
  data: {
    [key: string]: string;
  };
  content: string;
};

type FilterItems = {
  snippets: Items[]
  categories: string[];
  languages: string[];
};

// 게시물 경로내 목록 파일 가져오기
const SNIPPETS_PATH = join(process.cwd(), "_posts", "snippet");

function getSnippetFilePaths(): string[] {
  return (
    // 걱 MDX 게시물 경로 반환
    fs.readdirSync(SNIPPETS_PATH).filter((path) => /\.mdx?$/.test(path))
  );
}

// 게시물 단건(상세) 조회
export function getSnippet(slug: string): Snippet {
  // 해당 포스트(slug) 경로 조회
  const fullPath = join(SNIPPETS_PATH, `${slug}.mdx`);
  // 포스트 컨텐츠 utf-8 인코딩 방식으로 변경
  const fileContents = fs.readFileSync(fullPath, "utf-8");
  // 머리글 YAML 데이터 및 게시글 내용 가져오기
  const { data, content } = matter(fileContents);
  // 데이터 및 게시글 내용 반환
  return { data, content };
}

// 스니펫 아이템 정리
export function getSnippetItems(
  filePath: string,
  fields: string[] = []
): Items {
  // mdx 파일 경로 slug 생성
  const slug = filePath.replace(/\.mdx?$/, "");
  // matter 데이터(데이터, 게시글) 가져오기
  const { data, content } = getSnippet(slug);

  const items: Items = {};

  // 필요 콘텐츠 로드
  fields.forEach((field) => {
    // slug 로드
    if (field === "slug") {
      items[field] = slug;
    }
    // 스니펫 내용 로드
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
export function getAllSnippets(fields: string[]): FilterItems {
  // 모든 포스트의 경로 가져오기
  const filePaths = getSnippetFilePaths();
  // 위 filePaths의 포스트를 날짜별로 sort하여 가져오기
  const snippets = filePaths
    .map((filePath) => getSnippetItems(filePath, fields))
    .sort((post1, post2) => (post1.date < post2.date ? 1 : -1));
  const categories = [...new Set(snippets.map((snippet) => snippet.category))];
  const languages = [...new Set(snippets.map((snippet) => snippet.language))];

  // .filter((post) => post.tag === tagName && post.postnumber !== postNumber).slice(0, 3)
  return {snippets, categories, languages};
}