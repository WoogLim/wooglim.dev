import { Giscus } from "@giscus/react";
import { giscus } from "../data/metadata";

const GiscusBox = ({ slug }: { slug: string }) => {
  return (
    <>
      <Giscus
        repo={`${giscus.id}/${giscus.repo}`}
        repoId={process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID!}
        category={giscus.category}
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
