import {
  ListFilter,
  SnippetsSearchBox,
  SnippetsSearch,
  SnippetsSearchBtn,
} from "./SearchFilter.style";
import Image from "next/image"


export const SerachFilter = (props: { guide: string }) => {
  return (
    <ListFilter className="searchBox">
      <SnippetsSearchBox>
        <SnippetsSearch spellCheck={false} placeholder={props.guide} />
        <SnippetsSearchBtn>
          <Image
            src="/Images/search.svg"
            alt="search"
            width={19.4}
            height={19.4}
          />
        </SnippetsSearchBtn>
      </SnippetsSearchBox>
    </ListFilter>
  );
};
