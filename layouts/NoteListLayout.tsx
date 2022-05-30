import {
  NoteContainer,
  ListWrap,
  MenuWrap,
  NoteListWrap,
} from "./NoteListLayout.style";
import { NoteItem } from "../components/NoteItem";

export const NoteListLayout = () => {
  return (
    <NoteContainer>
      <ListWrap>
        <MenuWrap>
          <h3>note</h3>
          <span>배운 지식을 책과 같이 상세히 기록합니다.</span>
        </MenuWrap>
        <NoteListWrap>
          <NoteItem />
          <NoteItem />
          <NoteItem />
          <NoteItem />
          <NoteItem />
          <NoteItem />
          <NoteItem />
          <NoteItem />
          <NoteItem />
          <NoteItem />
        </NoteListWrap>
      </ListWrap>
    </NoteContainer>
  );
};
