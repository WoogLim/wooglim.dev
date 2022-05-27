import {} from "./TagItemList.style";
import { PostI } from "../types/post";

type Props = {
  tags: String[];
};

export const TagItemList = ({ tags }: Props) => {
  return <>
    {tags.map((tag, index) => (
        <li key={index}>{tag}</li>
    ))}
  </>;
};
