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
  FilterWrap,
  SelectBox,
  FilterList,
  FilterItem,
  ClearBtn,
  ListFilter,
  SnippetsSearchBox,
  SnippetsSearch,
  SnippetsSearchBtn,
  PostNumber,
} from "./SnippetsListLayout.style";

import { SnippetI } from "../types/snippet";
import React, { useState, useEffect } from "react";
import Image from "next/image";

type SnippetIndexProps = {
  snippets: [SnippetI];
  categories: string[];
  languages: string[];
};

export const SnippetsListLayout = ({
  snippets,
  categories,
  languages,
}: SnippetIndexProps) => {
  const [filteredSnippets, setFilteredSnippets] =
    useState<SnippetI[]>(snippets);
  const [snippetTitles, setSnippetTitles] = useState<string[]>(
    snippets.map((snippet: SnippetI) => snippet.title.toLowerCase())
  );
  const [postNumber, setPostNumber] = useState<number>(snippets.length);

  // 필터
  const [searchWord, setSearchWord] = useState("");
  // const [category, setCategory] = useState("");
  const [language, setLanguage] = useState("");

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchWord(e.currentTarget.value);
    // searchFilter.searchWord = e.target.value;
  };

  const onSelectLanguage = (e: React.MouseEvent<HTMLLIElement>) => {
    setLanguage(e.currentTarget.innerText);
  };

  const onClickDropMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
    const dropdown = e.currentTarget.nextElementSibling;
    dropdown?.setAttribute("data-dropdown", "true");
  };

  const onFilterClear = (e: React.MouseEvent<HTMLButtonElement>) => {
    setLanguage("");
    setSearchWord("");
  };

  const onBlueDropMenu = (e: React.FocusEvent<HTMLButtonElement>) => {
    const dropdown = e.currentTarget.nextElementSibling;
    setTimeout(() => {
      dropdown?.setAttribute("data-dropdown", "false");
    }, 200);
  };

  useEffect(() => {
    const filteredSinppetsTitles: String[] = [...snippetTitles].filter(
      (title: string) => title.indexOf(searchWord.trim().toLowerCase()) !== -1
    );

    const filteredSnippets: SnippetI[] = [...snippets].filter(
      (snippet: SnippetI) =>
        filteredSinppetsTitles.includes(snippet.title.toLowerCase())
    );

    const filteredLanguage: SnippetI[] = filteredSnippets.filter(
      (snippet: SnippetI) => language.includes(snippet.language)
    );

    if (language != "") {
      setFilteredSnippets(filteredLanguage);
      setPostNumber(filteredLanguage.length);
    } else {
      setFilteredSnippets(filteredSnippets);
      setPostNumber(filteredSnippets.length);
    }
  }, [searchWord, snippetTitles, language, snippets]);

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
            <FilterWrap>
              <SelectBox onClick={onClickDropMenu} onBlur={onBlueDropMenu}>
                언어
              </SelectBox>
              <FilterList className="dropMenu" data-dropdown="false">
                {languages.map((language, idx) => {
                  return (
                    <FilterItem key={idx} onClick={onSelectLanguage}>
                      {language}
                    </FilterItem>
                  );
                })}
              </FilterList>
            </FilterWrap>
            <ClearBtn onClick={onFilterClear}>초기화</ClearBtn>
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
              ? `There is no snippet titled "${searchWord}"`
              : filteredSnippets.map((snippet, idx) => {
                  return <SnippetItem snippet={snippet} key={idx} />;
                })}
          </ItemList>
        </ItemListWrap>
      </ListsWrap>
    </SnippetsConatainer>
  );
};
