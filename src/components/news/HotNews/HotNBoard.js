import styled from "styled-components";
import HotNList from "./HotNList"

const Nav = styled.div`
margin: 0 auto;
width:  1170px;
height: 500px;
margin-top: 30px;
`
const Title = styled.span`
font-family: IBM Plex Sans KR;
font-size: 36px;
font-style: normal;
font-weight: 600;
line-height: normal;
h4{
   margin-left:20px;
    
}
`

function HotNBoard() {
    return (
        <Nav>
            <Title><h4>지금 가장 인기있는 뉴스</h4></Title>
            <HotNList></HotNList>
        </Nav>
    );
    
}

export default HotNBoard;