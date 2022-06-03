import { renderToString } from "react-dom/server";
import { MDXProvider } from "@mdx-js/react";
import React from "react";

import { MdxContainer, PostBox, ContentOfPost } from "./PostMdx.style";

const moveScrollTarget = (e: React.BaseSyntheticEvent) => {
  e.preventDefault();
  const elem = e.target;
  window.scrollTo(0, elem.offsetTop - 82);
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
};

// console.log(React.Children.toArray(children));
// typeof(children) : Object
// typeof(React.Children.toArray(children)) : Array -> 고유의 키번호가 같이 붙음 .1, .2

// giscus 각 포스트별 댓글..

export const MdxLayout = ({ children }: Props) => {
  const childrenArray = React.Children.toArray(children);
  const contentString = renderToString(children);

  const getHeadings = (source: string) => {
    const regex = /<h3 id="(.*)">(.*?)<\/h3>/g;

    if (source.match(regex)) {
      return source.match(regex)?.map((heading) => {
        const headingText = heading.replace("<h3>", "").replace("</h3>", "");
        console.log(headingText);
        const link = "#" + headingText.replace(/ /g, "_").toLowerCase();
        console.log(link);
        return {
          text: headingText,
          link,
        };
      });
    }

    return [];
  };

  const headings = getHeadings(contentString);
  console.log("children =>>", contentString);
  console.log("headings =>>", headings);
  return (
    <>
      <MDXProvider
        components={{
          // Map HTML element tag to React component
          h1: CustomH1,
          h2: CustomH2,
          h3: CustomH3,
          pre: CustomCodeBlock,
          hr: () => <hr style={{ marginTop: "1rem", marginBottom: "0" }} />,
        }}
      >
        <MdxContainer>
          <PostBox>{childrenArray}</PostBox>
          {/* <ContentOfPost>
            {headings!.length > 0 ? (
              <ol>
                {headings?.map((heading) => (
                  <li key={heading.text}>
                    <a href={heading.link}>{heading.text}</a>
                  </li>
                ))}
              </ol>
            ) : null}
          </ContentOfPost> */}
        </MdxContainer>
      </MDXProvider>
    </>
  );
};
