import { Giscus } from "@giscus/react";
import { metadata } from "../data/metadata";
import {  } from "./GiscusItem.style";

const GiscusBox = () => {
  return (
    <>
      <Giscus
        repo={`${metadata.giscus.id}/${metadata.giscus.repo}`}
        repoId={`${metadata.giscus.repo}`}
        category={`${metadata.giscus.category}`}
        categoryId={process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID}
        mapping="pathname"
        reactionsEnabled="1"
        emitMetadata="0"
        theme="white"
      />
    </>
  );
};

export default GiscusBox;
