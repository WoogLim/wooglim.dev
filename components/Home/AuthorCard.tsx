import {
  AuthorCardWrap,
  Card,
  AuthorProfile,
  AuthorLink,
  AuthorInfoWrap,
  AuthorImage,
  AuthorInfo,
  AuthroName,
  AuthroJob,
  AuthorLinkWrap,
  LinkButton,
  AuthorResumeBtn,
} from "./AuthorCard.style";

import Image from "next/image";
import { social } from "../../data/metadata";

export const AuthorCard = () => {
  return (
    <AuthorCardWrap>
      <Card className="dark:bg-zinc-300">
        <AuthorProfile>
          <AuthorImage src="https://avatars.githubusercontent.com/u/51357635?s=400&u=36fd01b69ccd7729620c086927f9c0847ffdb0e1&v=4" />
          <AuthorInfo>
            <AuthroName>WoogLim</AuthroName>
            <AuthroJob>Backend Developer</AuthroJob>
          </AuthorInfo>
        </AuthorProfile>
        <AuthorLink>
          <AuthorInfoWrap>
            <AuthorResumeBtn className="dark:text-neutral-50 dark:bg-slate-800">View Resume</AuthorResumeBtn>
          </AuthorInfoWrap>
          <AuthorLinkWrap>
            <LinkButton href={social.github}  className="dark:bg-zinc-300">
              <Image
                src="/Images/Home/github.svg"
                alt="github"
                width={28}
                height={28}
                layout="intrinsic"
              />
            </LinkButton>
            <LinkButton href={social.linkedin}  className="dark:bg-zinc-300">
              <Image
                src="/Images/Home/linkedin.svg"
                alt="github"
                width={28}
                height={28}
                layout="intrinsic"
              />
            </LinkButton>
          </AuthorLinkWrap>
        </AuthorLink>
      </Card>
    </AuthorCardWrap>
  );
};
