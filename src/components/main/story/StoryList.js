import { ReactComponent as Picture1 } from "assets/images/story/picture1.svg";
import { ReactComponent as Picture2 } from "assets/images/story/picture2.svg";
import styled from "styled-components";
import StoryItem from "./StoryItem";

const List = styled.div`
    width: 1136px;
    height: 450px;
    display: flex;
    justify-content: center;
    margin-top: 1rem;
    
`

function ReviewList() {
    return (
        <List>
            <StoryItem img={<Picture1/>} title={`유럽 축구에 꽂힌 K-타이어`}/>
            <StoryItem img={<Picture2/>} title={`국내 타이어 3사, 여름 휴가철 맞아\n무료 점검 이벤트 경쟁`}/>
        </List>
    );
}

export default ReviewList;