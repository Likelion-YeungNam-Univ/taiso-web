import styled from "styled-components";
import React from "react";
import TireImage from "../../assets/images/mypage/Tire.png"

const Container = styled.div`
  width: 237px;
  height: 256px;
  border-radius: 8px;
  background: #E5E1E1;
  margin-right: 20px;
`;

const Imagebox = styled.div`
margin:0 auto;
width: 128px;
height: 155px;
margin-top:10px;
  margin-bottom: 18px;
  img {
    background: #E5E1E1;
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;

const InnerContent = styled.div`
  height: 83px;
`;

const TitleBox = styled.div`
  display: flex;
  p {
    color: #000;
    font-family: IBM Plex Sans KR;
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-left: 10px;

  }
`;

const Brand = styled.div`
  width: 22px;
  height: 18px;
  display: inline-flex;
  padding: 5px 5px 5px 5px;
  margin-left: 15px;
  margin-bottom: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 32px;
  background: #fff;
  border: 1px;
  box-shadow: 0px 5px 20px 0px #999;
  align-items: center;
color: #F00;
text-align: center;
font-family: IBM Plex Sans KR;
font-size: 10px;
font-style: normal;
font-weight: 600;
line-height: normal;
`;

const TireType = styled.div`
 padding-left:10px;
 color: rgba(0, 0, 0, 0.50);
font-family: IBM Plex Sans KR;
font-size: 15px;
font-style: normal;
font-weight: 500;
line-height: normal;
`

function MybookmarkItem(props) {
  return (
    <Container>
      <Imagebox>
        <img src={TireImage} />
      </Imagebox>
      <InnerContent>
        <TitleBox>
          <Brand>{props.brand}</Brand>
          <p>{props.tirename}</p>
        </TitleBox>
        <TireType>{props.tiretype}</TireType>
      </InnerContent>
    </Container>
  );
}

export default MybookmarkItem;
