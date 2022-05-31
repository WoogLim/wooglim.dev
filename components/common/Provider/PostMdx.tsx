import { MDXProvider } from "@mdx-js/react"
import React from "react"

const CustomH1 = ({ ...rest }) => {
  console.log("시비")
  console.log(rest)
    return (
      <a href={`#${rest.id}`}>
          <h1 {...rest} />
      </a>
    );
};

type Props = {
  children: React.ReactNode
}

export const MdxLayout = ({ children }: Props) =>{
  return (
    <MDXProvider
      components={{
        // Map HTML element tag to React component
        h1: CustomH1,
        h2: CustomH1,
        h3: CustomH1,
      }}
    >
      {children}
    </MDXProvider>
  )
}