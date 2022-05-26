import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import { PostFieldsType, PostType } from "./postApi";

export const noteDirectory = join(process.cwd(), "_posts", "note");

export function getNoteSlugs() {
    const subDirs = fs.readdirSync(noteDirectory, { withFileTypes: true });
    const result: Map<string, string[]> = new Map<string, string[]>();
    subDirs.forEach((dir) => {
        if (dir.isDirectory()) {
            let subMdxFiles = fs.readdirSync(join(noteDirectory, dir.name));
            if (subMdxFiles.length > 0) result.set(dir.name, subMdxFiles);
        }
    });

    return result;
}

export function getNoteBySlug(slug: string[], fields: PostFieldsType[]) {
    const realSlug = slug[1].replace(/\.mdx$/, "");
    const fullPath = join(noteDirectory, slug[0], `${realSlug}.mdx`);
    // console.log(`slug is ${slug}`);
    // console.log(`full path is ${fullPath}`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
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

export function getAllNotes(fields: PostFieldsType[] = []) {
    const slugs = getNoteSlugs();
    const result = new Map<string, PostType[]>();

    slugs.forEach((values, key, map) => {
        // console.log(`key : ${key} values : ${values}`);
        result.set(
            key,
            values.map((val) => {
                return getNoteBySlug([key, val], fields);
            })
        );
    });
    return result;
}
