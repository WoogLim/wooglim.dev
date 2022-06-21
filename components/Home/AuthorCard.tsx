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
  AuthorLinkImage,
  AuthorResumeBtn,
} from "./AuthorCard.style";

export const AuthorCard = () => {
  return (
    <AuthorCardWrap>
      <Card>
        <AuthorProfile>
          <AuthorImage src="https://avatars.githubusercontent.com/u/51357635?s=400&u=36fd01b69ccd7729620c086927f9c0847ffdb0e1&v=4" />
          <AuthorInfo>
            <AuthroName>WoogLim</AuthroName>
            <AuthroJob>Fullstack Engineer</AuthroJob>
          </AuthorInfo>
        </AuthorProfile>
        <AuthorLink>
          <AuthorInfoWrap>
            <AuthorResumeBtn>View Resume</AuthorResumeBtn>
          </AuthorInfoWrap>
          <AuthorLinkWrap>
            <a><AuthorLinkImage src="/Images/Home/linkedin.svg"/></a>
            <a><AuthorLinkImage src="/Images/Home/github.svg"/></a>
          </AuthorLinkWrap>
        </AuthorLink>
      </Card>
    </AuthorCardWrap>
  );
};
