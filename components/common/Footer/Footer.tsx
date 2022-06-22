import {
  BottomContainer,
  FooterWrap,
  Copyright,
  BlogLinks,
  LinkButton,
} from "./Footer.style";
import Image from "next/image";

export const Footer = () => {
  return (
    <BottomContainer className="dark:border-zinc-200">
      <FooterWrap>
        <Copyright className="dark:text-zinc-100">© 2022 GeonLim.</Copyright>
        <BlogLinks>
          <LinkButton href="https://github.com/WoogLim/woogLim.dev" className="dark:bg-zinc-200">
            <Image
              src="/Images/Home/github.svg"
              alt="github"
              width={30}
              height={30}
              layout="intrinsic"
              className="dark:bg-zinc-200"
            />
          </LinkButton>
        </BlogLinks>
      </FooterWrap>
    </BottomContainer>
  );
};
