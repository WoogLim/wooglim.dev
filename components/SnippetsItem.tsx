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
      <ItemDescription>useState 를 통해 컴포넌트에서 바뀌는 값 관리하기. 지금까지 우리가 리액트 컴포넌트를 만들 때는, 동적인 부분이 하나도 없었습니다. 값이 바뀌는 일이 없었죠.</ItemDescription>
      <ItemCategory>React</ItemCategory>
      <ItemUpdate>2022. 05. 25</ItemUpdate>
    </ItemWrap>
  );
};
