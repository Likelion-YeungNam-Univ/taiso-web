import styled from "styled-components";
import MybookmarkList from "./MybookmarkList";
import React from "react";

const Container = styled.div`
width: 866px;
height: 330px;
box-shadow: 0px 16px 40px 0px rgba(112, 144, 176, 0.20);

`
const Title = styled.div`
margin-left:20px;
margin-top:10px;
padding-top:10px;
p{
    color: #484848;
font-family: IBM Plex Sans KR;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;
text-decoration-line: underline;
}
`

function MybookmarkBoard() {
    return (
       <Container>
            <Title><p>내가 찜한 상품</p></Title>
            <MybookmarkList></MybookmarkList>
       </Container>
    );
    
}

export default MybookmarkBoard;