import React from "react";
import styled from "styled-components";
import { ReactComponent as MyFace } from "../../assets/images/mypage/Image.svg";

const Container = styled.div`
  width: 279px;
  height: 610px;
  border-radius: 8px;
  background-color: lightgray;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top:5px;

`;

const Imagebox = styled.div`
  width: 142.64px;
  height: 142.64px;
  border-radius: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  
  svg {
    width: 100%;
    height: 100%;
  }
`;

const Content = styled.div`
  text-align: center;
`;

const Title = styled.span`
margin-bottom:10px;
padding:5px;
h4{
    color: #484848;
text-align: center;
font-family: Montserrat;
font-size: 22px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
  p {
    color: #03C75A;
    font-family: Montserrat;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-bottom: 15px;
  }
`;

const Button = styled.button`
  width: 150px;
  height: 40px;
  background-color: #03C75A;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 600;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #02a65a;
  }
`;

function MyProfile() {
  return (
    <Container>
      <Imagebox>
        <MyFace />
      </Imagebox>
      <Content>
        <Title>
          <h4>이진우</h4>
          <p>binarywoo@gmail.com</p>
        </Title>
        <Title>
          <p>이메일 인증 완료<br />차량 정보 등록 완료<br />타이어 사이즈 등록 완료</p>
        </Title>
        <Button>프로필 수정하기</Button>
      </Content>
    </Container>
  );
}

export default MyProfile;
