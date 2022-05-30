import {
  SnippetsConatainer,
  ListsWrap,
  MenuWrap,
  ListFilter,
  SnippetsSearchBox,
  SnippetsSearch,
  SnippetsSearchBtn,
  SnippetsDropDownSelect,
  ItemListWrap,
  ListHeader,
  ItemList,
} from "./SnippetsListLayout.style";
import { SnippetsItem } from "../components/SnippetsItem";

export const SnippetsListLayout = () => {
  return (
    <SnippetsConatainer>
      <ListsWrap>
        <MenuWrap>
          <h3>snippets</h3>
          <span>빠른 재사용을 위해 코드와 지식을 기록합니다.</span>
        </MenuWrap>
        <ListFilter>
          <SnippetsSearchBox>
            <SnippetsSearch spellCheck={false} placeholder="Find a Snippets..." />
            <SnippetsSearchBtn/>
          </SnippetsSearchBox>
          <SnippetsDropDownSelect data-dropdown={true}>
              {/* 작업중 */}
          </SnippetsDropDownSelect>
        </ListFilter>

        <ItemListWrap>
            <ListHeader>
                <span>name</span>
                <span>description</span>
                <span>category</span>
                <span>last updated</span>
            </ListHeader>
            <ItemList>
                <SnippetsItem/>
                <SnippetsItem/>
                <SnippetsItem/>
            </ItemList>
        </ItemListWrap>
        
      </ListsWrap>
    </SnippetsConatainer>
  );
};
