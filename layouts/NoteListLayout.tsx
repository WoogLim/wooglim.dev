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
          <span>준비중입니다! 😅</span>
        </MenuWrap>
      </ListWrap>
    </NoteContainer>
  );
};
