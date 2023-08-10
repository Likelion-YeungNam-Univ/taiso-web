import { ReactComponent as ThumbUp } from "assets/images/recommand/ThumbUp.svg";
import styled from "styled-components";
import RecommandList from "./RecommandList";

const Title = styled.div`
    height: 100px;
    display: flex;
    align-items: center;
    
    
    padding: 0.5rem;
    margin-bottom: 2rem;
    h1 {
        padding: 1rem;
        padding-top: 50px;
        font-size: 40px;
        font-weight: 600;
        font-family: 'IBM Plex Sans KR', sans-serif;
    }
`;
const ThumbUpIcon = styled(ThumbUp)`
    margin-left: 2rem;
`;
const Nav = styled.div`
    width: 1136px;
    height: 600px;
    /* position: absolute; */
    /* left: 50%; */
    /* transform: translateX(-50%); */
    margin: auto;
    margin-top: 80px;
`

function RecommandBoard() {
    return (
        <Nav>
            <Title>
                <ThumbUpIcon/>
                <h1>타이어 전문 MD가 추천해드려요</h1>
            </Title>
            <RecommandList/>
        </Nav>
    );
}

export default RecommandBoard;