// OG Image(Open Graphic Iamge) : the image that appears when you post a link to a web page or video content on your social media page

export type PostTypeFields =
    | "slug"
    | "title"
    | "date"
    | "author"
    | "content"
    | "ogImage"
    | "coverImage";

export type Author = {
    name: string;
    picture: string;
};

export type PostType = {
    slug: string;
    title: string;
    content: string;
    author: Author;
    date: Date;
    ogImage: {
        url: string;
    };
    coverImage: string;
    tags: string[];
};
