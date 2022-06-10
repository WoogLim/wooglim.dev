import { Giscus } from "@giscus/react";
import { metadata } from "../data/metadata";

const GiscusBox = ({ slug }: { slug: string }) => {
  return (
    <>
      <Giscus
        repo={`${metadata.giscus.id}/${metadata.giscus.repo}`}
        repoId={process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID!}
        category={metadata.giscus.category}
        categoryId={process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID}
        term={slug}
        mapping="pathname"
        reactionsEnabled="1"
        emitMetadata="0"
        theme="light"
        inputPosition="bottom"
        lang="en"
      />
    </>
  );
};

export default GiscusBox;
