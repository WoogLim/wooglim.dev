import Link from "next/link";
import { SnippetI } from "../types/snippet";
import {
  ItemWrap,
  ItemName,
  ItemDescription,
  ItemInfo,
  ItemLanguage,
  ItemUpdate,
} from "./SnippetsItem.style";

type SnippetsProps = {
  snippet: SnippetI;
};

export const SnippetItem = ({ snippet }: SnippetsProps) => {
  return (  
    <Link href={`/snippets/${snippet.slug}`} passHref>
      <ItemWrap>
        <ItemInfo>
          <ItemLanguage>
            <span>{snippet.language}</span>
          </ItemLanguage>
          <ItemUpdate>{snippet.update}</ItemUpdate>
        </ItemInfo>
        <ItemName>
          {snippet.title}
        </ItemName>
        <ItemDescription>
          {snippet.description}
        </ItemDescription>
      </ItemWrap>
    </Link>
  );
};
