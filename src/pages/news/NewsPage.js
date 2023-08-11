import { RecentBoard, HotNBoard } from "components";
import AdPart from "../main/AdPart";
import styled from "styled-components";

const Title = styled.span`
h4{
    text-align: center;
   font-family: IBM Plex Sans KR;
    font-size: 36px;
    ont-style: normal;
    font-weight: 600;
    line-height: normal;
}
`

function NewsPage() {
    return (
        <div>
        <Title><h4>타이소가 모아본 타이어 뉴스</h4></Title>
        <HotNBoard></HotNBoard>
        <AdPart></AdPart>
        <RecentBoard></RecentBoard>
        </div>
    );
};
  
export default NewsPage;