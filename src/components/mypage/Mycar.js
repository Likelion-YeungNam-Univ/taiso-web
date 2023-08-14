import styled from "styled-components";
import React from "react";
import { PlusCircleOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
width: 866px;
height: 229px;
 box-shadow: 0px 16px 40px 0px rgba(112, 144, 176, 0.20);
`

const Title = styled.div`
margin-left:20px;
p{
    padding-top:10px;
    color: #484848;
font-family: IBM Plex Sans KR;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;
text-decoration-line: underline;
}
`

const Keyword = styled.div`
margin-left:15px;
margin-right:15px;
p{
    color: #000;
font-family: IBM Plex Sans KR;
font-size: 15px;
font-style: normal;
font-weight: 600;
line-height: normal;
}
`

const MainCarContent = styled.div`
margin: 0 auto;
width: 846px;
height: 72px;
border-radius: 25px;
border: 3px solid #03C75A;
background: #FFF;
display:flex;
align-items:center;
margin-bottom: 10px;
margin-top:10px;
justify-content:space-between;
`
const AddCarContent = styled.div`
margin: 0 auto;
width: 846px;
height: 72px;
border-radius: 25px;
border: 2px solid #000;
background: #FFF;
display:flex;
align-items:center;
`

const Button  = styled.button`
width: 50px;
height: 50px;
padding: 2.083px;
border:none;
background-color: white;
margin-left:15px;
cursor: pointer;
`


function Mycar() {
    
    const movePage = useNavigate();

    function goRegister() {
        movePage('/register/car');
    }

    return (
      <Container>
        <Title>
            <p>내 차량 정보 관리</p>
        </Title>
        
            <MainCarContent>
                <Keyword><p>진우의 Main Car</p></Keyword>
                <Keyword><p> 24나 7777 ┃ 5인승 ┃ 포르쉐  ┃ 카이엔(3세대) ┃ 디젤 ┃ 265/55/R19</p></Keyword>
            </MainCarContent>
            <AddCarContent>
                <Button onClick={goRegister}><PlusCircleOutlined className="button" size="30"/></Button>
                <Keyword><p>새 차량 정보 등록하기</p></Keyword>
            </AddCarContent>
      </Container>
    );
    
}

export default Mycar;