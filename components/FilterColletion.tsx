import {
    FitlerContainer,
    SelectWrap,
    SerachWrap,
    SelectBox
} from "./FilterCollection.style"
import { SerachFilter } from "./SearchFitler";

export const FilterCollection = () => {

    return(
        <FitlerContainer>
            <SelectWrap>
                <SelectBox>영역</SelectBox>
                <SelectBox>언어</SelectBox>
                <SelectBox>초기화</SelectBox>
            </SelectWrap>
            <SerachWrap>
                <SerachFilter guide="Search..."/>
            </SerachWrap>
        </FitlerContainer>
    );
}