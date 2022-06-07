import { TagType, TagBtn } from "./TagItem.style";
import { PostI } from "../types/post";

type Props = {
  // tags: String[];
  tag: String;
};

// {tags.map((tag, index) => (
//     <li key={index}>{tag}</li>
// ))}

export const TagItem = ({ tag }: Props) => {
  return (
    <TagBtn>
      <TagType>{tag}</TagType>
    </TagBtn>
  );
};
