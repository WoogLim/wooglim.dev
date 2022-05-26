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
          <AuthorImage src="https://dummyimage.com/90x90" />
          <AuthorInfo>
            <AuthroName>WoogLim</AuthroName>
            <AuthroJob>Backend Developer</AuthroJob>
          </AuthorInfo>
        </AuthorProfile>
        <AuthorLink>
          <AuthorInfoWrap>
            <AuthorResumeBtn>View Resume</AuthorResumeBtn>
          </AuthorInfoWrap>
          <AuthorLinkWrap>
            <a><AuthorLinkImage src="https://dummyimage.com/40x40"/></a>
            <a><AuthorLinkImage src="https://dummyimage.com/40x40"/></a>
            <a><AuthorLinkImage src="https://dummyimage.com/40x40"/></a>
            <a><AuthorLinkImage src="https://dummyimage.com/40x40"/></a>
          </AuthorLinkWrap>
        </AuthorLink>
      </Card>
    </AuthorCardWrap>
  );
};
