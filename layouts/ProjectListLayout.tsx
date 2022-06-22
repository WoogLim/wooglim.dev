import {
  ProjectConatainer,
  ListsWrap,
  MenuWrap,
} from "./ProjectListLayout.style";

export const ProjectListLayout = () => {
  return (
    <ProjectConatainer>
      <ListsWrap>
        <MenuWrap className="dark:text-zinc-300">
          <h3>project</h3>
          <span>준비중입니다! 😅</span>
        </MenuWrap>
      </ListsWrap>
    </ProjectConatainer>
  );
};
