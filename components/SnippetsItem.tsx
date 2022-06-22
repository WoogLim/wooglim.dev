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
      <ItemWrap className="dark:border-zinc-300 dark:hover:border-yellow-400 dark:bg-zinc-900">
        <ItemInfo>
          <ItemLanguage className="dark:text-zinc-300">
            <span>{snippet.language}</span>
          </ItemLanguage>
          <ItemUpdate className="dark:text-zinc-300">{snippet.update}</ItemUpdate>
        </ItemInfo>
        <ItemName className="dark:text-zinc-300">
          {snippet.title}
        </ItemName>
        <ItemDescription className="dark:text-zinc-300">
          {snippet.description}
        </ItemDescription>
      </ItemWrap>
    </Link>
  );
};
