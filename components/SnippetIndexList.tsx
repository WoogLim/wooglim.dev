import Link from "next/link";
import { SnippetI } from "../types/snippet";
import {
  ListContainer,
} from "./SnippetIndexList.style";

type Props = {
  similarSnippets: SnippetI[];
};

export const SnippetIndexList = ({ similarSnippets }: Props) => {
  const category = [
    ...new Set(similarSnippets.map((snippet) => snippet.category)),
  ];

  // ['React Hook' : {
  // [],[]
  // }]

  const listItem = category.map((item) =>
    similarSnippets.filter((snippet) => snippet.category === item)
  );

  return (
    <ListContainer>
      {listItem.map((list, idx) => {
        return (
          <ul key={idx}>
            {list[0].category}
            {list.map((item, idx) => {
              return <li key={idx}>{item.title}</li>;
            })}
          </ul>
        );
      })}
      <ul className="li">1</ul>
      <ul className="li">2</ul>
      <ul className="li">3</ul>
      <ul className="li">4</ul>
      <ul className="li">5</ul>
      <ul className="li">6</ul>
      <ul className="li">7</ul>
      <ul className="li">8</ul>
      <ul className="li">9</ul>
      <ul className="li">10</ul>
      <ul className="li">11</ul>
      <ul className="li">12</ul>
      <ul className="li">13</ul>
      <ul className="li">14</ul>
      <ul className="li">3</ul>
      <ul className="li">4</ul>
      <ul className="li">5</ul>
      <ul className="li">6</ul>
      <ul className="li">7</ul>
      <ul className="li">8</ul>
      <ul className="li">9</ul>
      <ul className="li">10</ul>
      <ul className="li">11</ul>
      <ul className="li">12</ul>
      <ul className="li">13</ul>
      <ul className="li">14</ul>
    </ListContainer>
  );
};
