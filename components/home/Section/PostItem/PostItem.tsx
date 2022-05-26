import {
  PostItemWrap,
  Contents,
  Thumnail,
  Summary,
  SummaryTitle,
  SummarySub,
  PostItemDate,
} from "./PostItem.style";

export const PostItem = () => {
  return (
    <PostItemWrap>
      <Contents>
        <Summary>
          <SummaryTitle>도커 : 컨테이너 기초부터 서버 배포까지.</SummaryTitle>
          <SummarySub>도커는 가상머신의 역할을 넘어서 어느 플랫폼에서나 특정한 상태를 그대로 재현가능한 애플리케이션이다. </SummarySub>
          <PostItemDate>April 19 · 2022</PostItemDate>
        </Summary>
      </Contents>
      <Thumnail src="https://dummyimage.com/180x110" />
    </PostItemWrap>
  );
};
