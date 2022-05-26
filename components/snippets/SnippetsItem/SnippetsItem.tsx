import Link from "next/link";
import {
  ItemWrap,
  ItemNameWrap,
  ItemName,
  ItemDescription,
  ItemCategory,
  ItemUpdate,
} from "./SnippetsItem.style";

export const SnippetsItem = () => {
  return (
    <ItemWrap>
      <ItemNameWrap>
        <ItemName>
          <p>useState()</p>
        </ItemName>
      </ItemNameWrap>
      <ItemDescription>useState 동작 원리</ItemDescription>
      <ItemCategory>React</ItemCategory>
      <ItemUpdate>2022. 05. 25</ItemUpdate>
    </ItemWrap>
  );
};
