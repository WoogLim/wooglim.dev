import { renderToString } from "react-dom/server";
import { MDXProvider } from "@mdx-js/react";
import React from "react";

import {
  MdxContainer,
  PostBox
} from "./SnippetMdx.style";

const moveScrollTarget = (e: React.BaseSyntheticEvent) => {
  e.preventDefault();

  const elem = e.target.innerText
    .replace(/\(|\)|\?/g, "")
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
};

export const MdxLayout = ({ children }: Props) => {
  const childrenArray = React.Children.toArray(children);
  const contentString = renderToString(children);

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
          <PostBox>{childrenArray}</PostBox>
        </MdxContainer>
      </MDXProvider>
    </>
  );
};
