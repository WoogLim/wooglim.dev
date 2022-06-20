import { renderToString } from "react-dom/server";
import { MDXProvider } from "@mdx-js/react";
import { SnippetI } from "../../../types/snippet";
import Link from "next/link";
import React from "react";

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
} from "./SnippetMdx.style";
import { Bottom } from "../../Snippets/Bottom";

const moveScrollTarget = (e: React.BaseSyntheticEvent) => {
  e.preventDefault();

  const elem = e.target.innerText
    .replace(/\(|\)|\?|\./g, "")
    .replace(/\s/g, "-")
    .toLowerCase();

  // 단언. 이미 해당 객체가 만들어져 있는 상태
  const targetY = document.getElementById(elem)?.offsetTop;

  window.scrollTo(0, targetY! - 72);
};

const CustomH1 = ({ ...props }) => {
  return (
    <a href={`#${props.id}`} onClick={moveScrollTarget}>
      <h1 {...props} />
    </a>
  );
};

const CustomH2 = ({ ...props }) => {
  return (
    <a href={`#${props.id}`} onClick={moveScrollTarget}>
      <h2 {...props} />
    </a>
  );
};

const CustomH3 = ({ ...props }) => {
  return (
    <a href={`#${props.id}`} onClick={moveScrollTarget}>
      <h3 {...props} />
    </a>
  );
};

const CustomCodeBlock = ({ ...props }) => {
  return (
    <div className="codeBox">
      <div className="code-title">
        <span>{props.className.split("-")[1]}</span>
      </div>
      <pre {...props} />
    </div>
  );
};

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
          <ListContainer>
            {listItem.map((list, idx) => {
              return (
                <TopicCategory key={idx}>
                  <p className="topicTitle">{list[0].category}</p>
                  {list.map((item, idx) => {
                    return (
                      <TopicItem key={idx}>
                        <Link href={`/snippets/${item.slug}`}>
                          {item.title === frontMatter.title ? <p className="subTopic view">{item.title}</p> : <p className="subTopic">{item.title}</p> }
                        </Link>

                        {headings!.length > 0 &&
                        item.title === frontMatter.title
                          ? headings?.map((heading, index) => (
                              <IndexList key={index}>
                                {heading.type === "h1" ? (
                                  <IndexH1 onClick={moveScrollTarget}>
                                    {heading.text}
                                  </IndexH1>
                                ) : heading.type === "h2" ? (
                                  <IndexH2 onClick={moveScrollTarget}>
                                    {heading.text}
                                  </IndexH2>
                                ) : heading.type === "h3" ? (
                                  <IndexH3 onClick={moveScrollTarget}>
                                    {heading.text}
                                  </IndexH3>
                                ) : heading.type === "h4" ? (
                                  <IndexH4 onClick={moveScrollTarget}>
                                    {heading.text}
                                  </IndexH4>
                                ) : heading.type === "h5" ? (
                                  <IndexH5 onClick={moveScrollTarget}>
                                    {heading.text}
                                  </IndexH5>
                                ) : heading.type === "h6" ? (
                                  <IndexH6 onClick={moveScrollTarget}>
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

          <PostBox>
            <TopicTitle>{frontMatter.title}</TopicTitle>
            <TopicSummary>{frontMatter.description}</TopicSummary>
            {childrenArray}
            <Bottom/>
          </PostBox>
        </MdxContainer>
      </MDXProvider>
    </>
  );
};
