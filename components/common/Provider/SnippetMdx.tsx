import { renderToString } from "react-dom/server";
import { MDXProvider } from "@mdx-js/react";
import { SnippetI } from "../../../types/snippet";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";

import {
  MdxContainer,
  PostBox,
  ListContainer,
  TopicCategory,
  TopicItem,
  IndexList,
  IndexH1,
  IndexH2,
  IndexH3,
  IndexH4,
  IndexH5,
  IndexH6,
  TopicTitle,
  TopicSummary,
  IndexViewBtn,
  SnipptesNav,
  PrevSnippets,
  NextSnippets,
  ImgBox,
} from "./SnippetMdx.style";

const moveScrollTarget = (e: React.BaseSyntheticEvent) => {
  e.preventDefault();

  const elem = e.target.innerText
    .replace(/\(|\)|\?|\./g, "")
    .replace(/\s/g, "-")
    .toLowerCase();

  // 단언. 이미 해당 객체가 만들어져 있는 상태
  const targetY = document.getElementById(elem)!.offsetTop;

  window.scrollTo(0, targetY! - 72);
};

const CustomH1 = ({ ...props }) => {
  return (
    <a href={`#${props.id}`} onClick={moveScrollTarget}>
      <h1
        className="dark:text-zinc-300 dark:hover:text-yellow-400"
        {...props}
      />
    </a>
  );
};

const CustomH2 = ({ ...props }) => {
  return (
    <a href={`#${props.id}`} onClick={moveScrollTarget}>
      <h2
        className="dark:text-zinc-300 dark:hover:text-yellow-400"
        {...props}
      />
    </a>
  );
};

const CustomH3 = ({ ...props }) => {
  return (
    <a href={`#${props.id}`} onClick={moveScrollTarget}>
      <h3
        className="dark:text-zinc-300 dark:hover:text-yellow-400"
        {...props}
      />
    </a>
  );
};

const CustomH4 = ({ ...props }) => {
  return (
    <a href={`#${props.id}`} onClick={moveScrollTarget}>
      <h4
        className="dark:text-zinc-300 dark:hover:text-yellow-400"
        {...props}
      />
    </a>
  );
};

const CustomCodeBlock = ({ ...props }) => {
  return (
    <div className="codeBox dark:text-zinc-900">
      <div className="code-title dark:bg-zinc-200 dark:text-zinc-900">
        <span>{props.className.split("-")[1]}</span>
      </div>
      <pre {...props} />
    </div>
  );
};

const CustomImg = ({ ...props}) => {
  return (
    <ImgBox>
      <Image
        src={props.src}
        alt={props.alt}
        layout="fill"
        className="dark:bg-zinc-300 autoImage"
      />
    </ImgBox>
  )
}

type Props = {
  children: React.ReactElement;
  similarSnippets: SnippetI[];
  frontMatter: Omit<SnippetI, "slug">;
};

export const MdxLayout = ({
  children,
  similarSnippets,
  frontMatter,
}: Props) => {
  const childrenArray = React.Children.toArray(children);
  const contentString = renderToString(children);
  const [tocOpen, setTocOpen] = useState(false);

  const tocToggleHandle = () => {
    const tocMenu = document.getElementsByClassName("tocMenu")!;
    tocMenu[0].classList.toggle("showMenu");
    tocOpen === false ? setTocOpen(true) : setTocOpen(false);
  };

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

  const category = [
    ...new Set(similarSnippets.map((snippet) => snippet.category)),
  ];

  const listItem = category.map((item) =>
    similarSnippets.filter((snippet) => snippet.category === item)
  );

  const prevItem = listItem.map(
    (item) =>
      item.filter(
        (snippet) => snippet.serisenumber === frontMatter.serisenumber - 1
      )[0]
  )[0];

  const nextItem = listItem.map(
    (item) =>
      item.filter(
        (snippet) => snippet.serisenumber === frontMatter.serisenumber + 1
      )[0]
  )[0];

  const headings = getHeadings(contentString);
  return (
    <>
      <MDXProvider
        components={{
          // Map HTML element tag to React component
          h1: CustomH1,
          h2: CustomH2,
          h3: CustomH3,
          h4: CustomH4,
          img: CustomImg,
          pre: CustomCodeBlock,
          a: ({ ...props }) => (
            <a className="text-blue-600 dark:text-pink-600" {...props} />
          ),
          strong: ({ ...props }) => (
            <strong className="text-black dark:text-slate-200" {...props} />
          ),
          hr: () => (
            <hr
              style={{ marginTop: "1rem", marginBottom: "0", opacity: "0" }}
            />
          ),
          code: ({ ...props }) => (
            <code
              className="codeText bg-slate-100 text-black dark:bg-slate-900 dark:text-white"
              {...props}
            />
          ),
        }}
      >
        <MdxContainer>
          <ListContainer className="dark:bg-zinc-900 tocMenu">
            {listItem.map((list, idx) => {
              return (
                <TopicCategory className="dark:text-zinc-200" key={idx}>
                  <p className="topicTitle">{list[0].category}</p>
                  {list.map((item, idx) => {
                    return (
                      <TopicItem key={idx}>
                        <Link href={`/snippets/${item.slug}`}>
                          {item.title === frontMatter.title ? (
                            <p className="subTopic view">{item.title}</p>
                          ) : (
                            <p className="subTopic">{item.title}</p>
                          )}
                        </Link>

                        {headings!.length > 0 &&
                        item.title === frontMatter.title
                          ? headings?.map((heading, index) => (
                              <IndexList key={index}>
                                {heading.type === "h1" ? (
                                  <IndexH1
                                    className="text-zinc-900 dark:text-zinc-100 dark:hover:text-yellow-400"
                                    onClick={moveScrollTarget}
                                  >
                                    {heading.text}
                                  </IndexH1>
                                ) : heading.type === "h2" ? (
                                  <IndexH2
                                    className="text-zinc-900 dark:text-yellow-400 dark:hover:text-yellow-200"
                                    onClick={moveScrollTarget}
                                  >
                                    {heading.text}
                                  </IndexH2>
                                ) : heading.type === "h3" ? (
                                  <IndexH3
                                    className="text-zinc-700 dark:text-zinc-300 dark:hover:text-yellow-400"
                                    onClick={moveScrollTarget}
                                  >
                                    {heading.text}
                                  </IndexH3>
                                ) : heading.type === "h4" ? (
                                  <IndexH4
                                    className="text-zinc-600 dark:text-zinc-300 dark:hover:text-yellow-400"
                                    onClick={moveScrollTarget}
                                  >
                                    {heading.text}
                                  </IndexH4>
                                ) : heading.type === "h5" ? (
                                  <IndexH5
                                    className="text-zinc-700 dark:text-zinc-300 dark:hover:text-yellow-400"
                                    onClick={moveScrollTarget}
                                  >
                                    {heading.text}
                                  </IndexH5>
                                ) : heading.type === "h6" ? (
                                  <IndexH6
                                    className="text-zinc-700 dark:text-zinc-300 dark:hover:text-yellow-400"
                                    onClick={moveScrollTarget}
                                  >
                                    {heading.text}
                                  </IndexH6>
                                ) : (
                                  ""
                                )}
                              </IndexList>
                            ))
                          : null}
                      </TopicItem>
                    );
                  })}
                </TopicCategory>
              );
            })}
          </ListContainer>

          <IndexViewBtn
            className="dark:bg-pink-600 dark:text-zinc-200 dark:border-slate-900"
            onClick={tocToggleHandle}
          >
            {tocOpen ? "close" : "toc"}
          </IndexViewBtn>

          <PostBox className="dark:text-zinc-200">
            <TopicTitle className="dark:text-zinc-100">
              {frontMatter.title}
            </TopicTitle>
            <TopicSummary>{frontMatter.description}</TopicSummary>
            {childrenArray}
            <SnipptesNav>
              <PrevSnippets>
                {prevItem ? (
                  <Link href={`/snippets/${prevItem.slug}`}>
                    <a className="text-slate-900 hover:text-blue-600 dark:text-slate-200 dark:hover:text-yellow-400 ">
                      {`← ${prevItem.title}`}
                    </a>
                  </Link>
                ) : (
                  ""
                )}
              </PrevSnippets>
              <NextSnippets>
                {nextItem ? (
                  <Link href={`/snippets/${nextItem.slug}`}>
                    <a className="text-slate-900 hover:text-blue-600 dark:text-slate-200 dark:hover:text-yellow-400">
                      {`${nextItem.title} →`}
                    </a>
                  </Link>
                ) : (
                  ""
                )}
              </NextSnippets>
            </SnipptesNav>
          </PostBox>
        </MdxContainer>
      </MDXProvider>
    </>
  );
};
