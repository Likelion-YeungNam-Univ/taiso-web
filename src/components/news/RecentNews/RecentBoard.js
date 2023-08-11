import styled from "styled-components";
import RecentList from "./RecentList"

const Nav = styled.div`
width: 1920px;
height: 2500px;
`
const Title = styled.span`
width: 201px;
height: 40px;
font-family: IBM Plex Sans KR;
font-size: 36px;
font-style: normal;
font-weight: 600;
line-height: normal;
`

function RecentBoard() {
    return (
        <Nav>
            <Title><h1>최신 뉴스</h1></Title>
            <RecentList></RecentList>
        </Nav>
    );
    
}

export default RecentBoard;