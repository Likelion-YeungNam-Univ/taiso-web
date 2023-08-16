import { RecentBoard, HotNBoard } from "components";
import AdPart from "../main/AdPart";
import styled from "styled-components";

const Content = styled.div`
    width:1200px;
    margin:0 auto;
    margin-top: 50px;
`


const Title = styled.span`
    width:1200px;
    h4{
        text-align: center;
        font-family: IBM Plex Sans KR;
        font-size: 36px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        padding-bottom: 10px; /* 마진 및 여백 조정 */
        border-bottom: 1px solid #e0e0e0; /* 밑줄 추가 */
    }
`
const MiddleAd =styled.div`
    display: flex;
    justify-content: center;
`


function NewsPage() {
    return (
        
        <Content>
            <Title><h4>타이소가 모아본 타이어 뉴스</h4></Title>
            <HotNBoard/>
            <MiddleAd>
                <AdPart/>
            </MiddleAd>
            <RecentBoard/>
        </Content>
    );
};

export default NewsPage;