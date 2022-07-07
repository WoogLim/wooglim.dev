import { renderToString } from "react-dom/server";
import { MDXProvider } from "@mdx-js/react";
import React from "react";

import {
  MdxContainer,
  PostBox,
  ContentOfPost,
  IndexH1,
  IndexH2,
  IndexH3,
  IndexH4,
  IndexH5,
  IndexH6,
} from "./PostMdx.style";

const moveScrollTarget = (e: React.BaseSyntheticEvent) => {
  e.preventDefault();

  const elem = e.target.innerText
    .replace(/\(|\)|\?/g, "")
    .replace(/\s/g, "-")
    .toLowerCase();

  // 단언. 이미 해당 객체가 만들어져 있는 상태
  const targetY = document.getElementById(elem)!.offsetTop;

  window.scrollTo(0, targetY! - 72);
};

const CustomH1 = ({ ...props }) => {
  return (
    <a href={`#${props.id}`} onClick={moveScrollTarget}>
      <h1 {...props} className="dark:text-zinc-300 dark:hover:text-yellow-400"/>
    </a>
  );
};

const CustomH2 = ({ ...props }) => {
  return (
    <a href={`#${props.id}`} onClick={moveScrollTarget}>
      <h2 {...props} className="dark:text-zinc-300 dark:hover:text-yellow-400"/>
    </a>
  );
};

const CustomH3 = ({ ...props }) => {
  return (
    <a href={`#${props.id}`} onClick={moveScrollTarget}>
      <h3 {...props} className="dark:text-zinc-300 dark:hover:text-yellow-400"/>
    </a>
  );
};

const CustomCodeBlock = ({ ...props }) => {
  return (
    <div className="codeBox  dark:text-zinc-900 ">
      <div className="code-title dark:bg-zinc-200 dark:text-zinc-900">
        <span>{props.className.split("-")[1]}</span>
      </div>
      <pre {...props} />
    </div>
  );
};

type Props = {
  children: React.ReactElement;
};

// console.log(React.Children.toArray(children));
// typeof(children) : Object
// typeof(React.Children.toArray(children)) : Array -> 고유의 키번호가 같이 붙음 .1, .2

// giscus 각 포스트별 댓글..

export const MdxLayout = ({ children }: Props) => {
  const childrenArray = React.Children.toArray(children);
  const contentString = renderToString(children);

  const getHeadings = (source: string) => {
    const regex = /<h[1-6]{1} id="(.*)">(.*?)<\/h[1-6]{1}>/g;

    if (source.match(regex)) {
      return source.match(regex)?.map((heading) => {
        const headingText = heading
          .replace(/<[^>]*>?/g, "")
          .replace(/<\/[^>]*>?/g, "");

        const tag = heading.match(/<\/[a-z]{1}[1-6]{1}>/g) + "";
        return {
          type: tag.replace(/<|>|\//g, ""),
          text: headingText,
        };
      });
    }

    return [];
  };

  const headings = getHeadings(contentString);
  return (
    <>
      <MDXProvider
        components={{
          // Map HTML element tag to React component
          h1: CustomH1,
          h2: CustomH2,
          h3: CustomH3,
          pre: CustomCodeBlock,
          hr: () => (
            <hr
              style={{ marginTop: "1rem", marginBottom: "0", opacity: "0" }}
            />
          ),
        }}
      >
        <MdxContainer>
          <PostBox className="dark:text-zinc-100">{childrenArray}</PostBox>
          <ContentOfPost className="postOfContents dark:text-zinc-100">
            {headings!.length > 0
              ? headings?.map((heading, index) => (
                  <li key={index}>
                    {heading.type === "h1" ? (
                      <IndexH1 className="dark:text-zinc-300" onClick={moveScrollTarget}>{heading.text}</IndexH1>
                    ) : heading.type === "h2" ? (
                      <IndexH2 className="dark:text-zinc-300 dark:hover:text-yellow-400" onClick={moveScrollTarget}>{heading.text}</IndexH2>
                    ) : heading.type === "h3" ? (
                      <IndexH3 className="dark:text-zinc-300 dark:hover:text-yellow-400" onClick={moveScrollTarget}>{heading.text}</IndexH3>
                    ) : heading.type === "h4" ? (
                      <IndexH4 className="dark:text-zinc-300 dark:hover:text-yellow-400" onClick={moveScrollTarget}>{heading.text}</IndexH4>
                    ) : heading.type === "h5" ? (
                      <IndexH5 className="dark:text-zinc-300 dark:hover:text-yellow-400" onClick={moveScrollTarget}>{heading.text}</IndexH5>
                    ) : heading.type === "h6" ? (
                      <IndexH6 className="dark:text-zinc-300 dark:hover:text-yellow-400" onClick={moveScrollTarget}>{heading.text}</IndexH6>
                    ) : (
                      ""
                    )}
                  </li>
                ))
              : null}
          </ContentOfPost>
        </MdxContainer>
      </MDXProvider>
    </>
  );
};
