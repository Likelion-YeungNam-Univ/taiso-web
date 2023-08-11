import styled from "styled-components";
import HotList from "./HotList";
import { ReactComponent as Fire } from "assets/images/hot/tires/Fire.svg";
import { useNavigate } from "react-router-dom";

const Title = styled.div`
    height: 100px;
     display: flex;
   // align-items: center;
    padding: 0.5rem;
    margin-top:5px;
    margin-bottom: 2rem;
    h1 {
        padding: 1rem;
        padding-top: 30px;
        font-size: 40px;
        font-weight: 600;
        font-family: 'IBM Plex Sans KR', sans-serif;
    }
`;
const FireIcon = styled(Fire)`
     margin-left: 1rem;
    
`;
const Nav = styled.div`
    width: 1137px;
    height: 900px;
    margin: 0 auto;
    margin-top: 20px;
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
    margin-top: 40px;
    cursor: pointer; 
    &:hover,
    &:active {
        background: black;
        color: white;
   }
`

function HotBoard() {
    const movePage = useNavigate();

    function goSearch() {
        movePage('/search');
    }

    return (
        <Nav>
            <Title>
                <FireIcon/>
                <h1>지금 이 순간, 가장 인기 있는 타이어</h1>
                <Button onClick={goSearch}>타이어 더보기 +</Button>
            </Title>
            <HotList/>
        </Nav>
    );
}

export default HotBoard;