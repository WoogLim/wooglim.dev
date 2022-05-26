import { Giscus } from '@giscus/react'

const GiscusBox = ({ slug }: { slug: string }) => {
  return (
    <>
      <Giscus
        repo="team-Twilight/BlogDiscussionTest"
        repoId="BlogDiscussionTest"
        category="General"
        categoryId="BlogDiscussionTest"
        mapping="pathname"
        term={slug}
        reactionsEnabled="1"
        emitMetadata="0"
        theme="white"
      />
    </>
  )
}

export default GiscusBox