import { MDXProvider } from "@mdx-js/react";
import React from "react";

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

type Props = {
  children: React.ReactNode;
};

export const MdxLayout = ({ children }: Props) => {
  return (
    <MDXProvider
      components={{
        // Map HTML element tag to React component
        h1: CustomH1,
        h2: CustomH2,
        h3: CustomH3,
        hr: () => <hr style={{ marginTop: "1rem", marginBottom: "0" }} />,
      }}
    >
      {children}
    </MDXProvider>
  );
};
