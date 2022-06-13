import { SnippetItem } from "../components/SnippetsItem";
import {
  SnippetsConatainer,
  ListsWrap,
  MenuWrap,
  ItemListWrap,
  ItemList,
  FitlerContainer,
  SelectWrap,
  SerachWrap,
  SelectBox,
  ListFilter,
  SnippetsSearchBox,
  SnippetsSearch,
  SnippetsSearchBtn,
  PostNumber
} from "./SnippetsListLayout.style";

import { SnippetI } from "../types/snippet";
import React, { useState, useEffect } from "react";
import Image from "next/image";

type SnippetIndexProps = {
  snippets: [SnippetI];
};

export const SnippetsListLayout = ({ snippets }: SnippetIndexProps) => {
  const [filteredSnippets, setFilteredSnippets] =
    useState<SnippetI[]>(snippets);
  const [snippetTitles, setSnippetTitles] = useState<string[]>(
    snippets.map((snippet: SnippetI) => snippet.title.toLowerCase())
  );
  const [searchWord, setSearchWord] = useState("");
  const [postNumber, setPostNumber] = useState<number>(snippets.length);

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchWord(e.target.value);
    // searchFilter.searchWord = e.target.value;
  };

  useEffect(() => {
    const filteredSinppetsTitles: String[] = [...snippetTitles].filter(
      (title: string) => title.indexOf(searchWord.trim().toLowerCase()) !== -1
    );

    const filteredSnippets: SnippetI[] = [...snippets].filter(
      (post: SnippetI) =>
        filteredSinppetsTitles.includes(post.title.toLowerCase())
    );

    setFilteredSnippets(filteredSnippets);
    setPostNumber(filteredSnippets.length);
  }, [searchWord, snippetTitles, snippets]);

  return (
    <SnippetsConatainer>
      <ListsWrap>
        <MenuWrap>
          <h3>snippets</h3>
          <span>짧은 코드 조각 모음</span>
            <PostNumber>{`${postNumber} Snippets`}</PostNumber>
        </MenuWrap>

        <FitlerContainer>
          <SelectWrap>
            <SelectBox>범주</SelectBox>
            <SelectBox>언어</SelectBox>
            <SelectBox>초기화</SelectBox>
          </SelectWrap>
          <SerachWrap>
            <ListFilter className="searchBox">
              <SnippetsSearchBox>
                <SnippetsSearch
                  value={searchWord}
                  spellCheck={false}
                  placeholder="Search.."
                  onChange={onChangeSearch}
                />
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
          </SerachWrap>
        </FitlerContainer>

        <ItemListWrap>
          <ItemList>
            {filteredSnippets.length < 1
              ? ""
              : filteredSnippets.map((snippet, idx) => {
                  return <SnippetItem snippet={snippet} key={idx} />;
                })}
          </ItemList>
        </ItemListWrap>
      </ListsWrap>
    </SnippetsConatainer>
  );
};
