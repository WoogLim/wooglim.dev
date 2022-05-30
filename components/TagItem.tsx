import {} from "./TagItem.style";
import { PostI } from "../types/post";

type Props = {
  // tags: String[];
  tag: String;
};

// {tags.map((tag, index) => (
//     <li key={index}>{tag}</li>
// ))} 

export const TagItem = ({ tag }: Props) => {
  return <>
    <span>{tag}</span>
  </>;
};
