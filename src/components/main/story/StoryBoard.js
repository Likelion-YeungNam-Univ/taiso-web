import { ReactComponent as Story } from "assets/images/story/StoryIcon.svg";
import styled from "styled-components";
import StoryList from "./StoryList";

const Title = styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    h1 {
        padding: 1rem;
        padding-top: 25px;
        font-size: 40px;
        font-weight: 600;
        font-family: 'IBM Plex Sans KR', sans-serif;
    }
`;
const StoryIcon = styled(Story)`
    margin-left: 2rem;
`;
const Nav = styled.div`
    width: 1136px;
    height: 650px;
    margin: 0 auto;
    left: 50%;
    
`
const Button = styled.button`
    width: 176px;
    height: 45px;
    font-size: 20px;
    font-family: 'IBM Plex Sans KR', sans-serif;
    background: white;
    border-radius: 30px;
    border: 2px solid black;
    margin-left: auto;
    /* margin-top: 1.5rem; */
    margin-top:32px;
`
function StoryBoard() {
    return (
        <Nav>
            <Title>
                <StoryIcon/>
                <h1>나도 몰랐던 타이어 이야기</h1>
                <Button>소식 더보기 +</Button>
            </Title>
            <StoryList/>
        </Nav>
    );
}

export default StoryBoard;