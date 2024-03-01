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
    <BottomContainer>
      <FooterWrap className="dark:border-zinc-300">
        <Copyright className="dark:text-zinc-300">© 2024 Woog. All right reserved</Copyright>
        <BlogLinks>
          <LinkButton href="https://github.com/WoogLim/woogLim.dev"  className="dark:bg-zinc-300">
            <Image
              src="/Images/Home/github.svg"
              alt="github"
              width={30}
              height={30}
              layout="intrinsic"
              className="dark:bg-zinc-300"
            />
          </LinkButton>
        </BlogLinks>
      </FooterWrap>
    </BottomContainer>
  );
};
