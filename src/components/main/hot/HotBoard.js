import styled from "styled-components";
import HotList from "./HotList";
import { ReactComponent as Fire } from "assets/images/hot/tires/Fire.svg";

const Title = styled.div`
    height: 100px;
     display: flex;
   // align-items: center;
    padding: 0.5rem;
    margin-top:5px;
    margin-bottom: 2rem;
    h1 {
        padding: 1rem;
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

function HotBoard() {
    return (
        <Nav>
            <Title>
                <FireIcon/>
                <h1>지금 이 순간, 가장 인기 있는 타이어</h1>
            </Title>
            <HotList/>
        </Nav>
    );
}

export default HotBoard;