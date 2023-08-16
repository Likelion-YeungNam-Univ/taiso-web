import styled from "styled-components";
import RecentList from "./RecentList"

const Nav = styled.div`
    margin: 0 auto;
    width: 1170px;
    height: 724;
    margin-top: 30px;
    margin-right: 28px;
  
`
const Title = styled.span`
font-family: IBM Plex Sans KR;
font-size: 36px;
font-style: normal;
font-weight: 600;
line-height: normal;
padding-bottom:20px;
h4{
   margin-left:20px;
    
}
`

function RecentBoard() {
    return (
        <Nav>
            <Title><h4>최신 뉴스</h4></Title>
            <RecentList></RecentList>
        </Nav>
    );
    
}

export default RecentBoard;