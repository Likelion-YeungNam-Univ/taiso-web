import { ReactComponent as Story } from "assets/images/story/StoryIcon.svg";
import styled from "styled-components";
import StoryList from "./StoryList";

const Title = styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    h1 {
        padding: 1rem;
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
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
`
const Button = styled.button`
    width: 176px;
    height: 45px;
    font-size: 20px;
    font-family: 'IBM Plex Sans KR', sans-serif;
    background: white;
    border-radius: 30px;
    border: 2px solid black;
    margin-left: 13rem;
    margin-top: 1.5rem;
`
function StoryBoard() {
    return (
        <Nav>
            <Title>
                <StoryIcon/>
                <h1>타이어 후기는 타이소 커뮤니티에서</h1>
                <Button>후기 더보기 +</Button>
            </Title>
            <StoryList/>
        </Nav>
    );
}

export default StoryBoard;