import React from "react";
import TireLogo from "../../assets/images/login/TireLogo.jpg"; 
import NaverIcon from "../../assets/images/login/NaverIcon.png";
import KakaoIcon from "../../assets/images/login/KakaoIcon.png"; 
import GoogleIcon from "../../assets/images/login/GoogleIcon.png"; 
import styled from "styled-components";

const Container = styled.div`
  // display: flex;
  flex-direction: column;
  //justify-content: center;
  text-align: center;
  align-items: center;
  // margin: 0 auto;
  // align-items: center;
`;

const TireLogoStyle = styled.img`
  width: 265px;
  height: 75px;
  // margin-top: 80px;
  margin: 0 auto;
  margin-bottom: 100px;
`;

const BtnStyleWrapper = styled.div`
  // display: flex;
  flex-direction: column;
  margin-top: 20px;
  display: flex;
align-items: center;
`;

const BtnStyle = styled.button`
  width: 309px;
  height: 57px;
  margin: 0 auto;
  border-radius: 4px;
  border: none; 
  margin-bottom: 80px; 
  cursor: pointer;
  background: ${props => props.backgroundColor || '#03C75A'};
  border: 1px solid rgba(111, 111, 111, 0.51);
`;

const ButtonText = styled.span`
 margin-left:20px;
text-align: left;
color: ${props => (props.isKakao ? "#FFF" : "#000")};
text-align: center;
font-family: Noto Sans KR;
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: 160%;
// display: flex;
// align-items: center;
`;

const LogoImg = styled.img`
  width: 30px; 
  height: auto; 
`;

const GoogleIconImg = styled.img`
  width: 20px;
  height: auto;
`;

const LoginButton = ({ logoSrc, altText, buttonText, backgroundColor}) => (
  <BtnStyle backgroundColor={backgroundColor}>
    {logoSrc === GoogleIcon ? (
      <GoogleIconImg src={logoSrc} alt={altText} />
    ) : (
      <LogoImg src={logoSrc} alt={altText} />
    )}
    <ButtonText>{buttonText}</ButtonText>
  </BtnStyle>
);


// const LoginButton = ({ logoSrc, altText, buttonText, backgroundColor  }) => (
//   <BtnStyle backgroundColor={backgroundColor}>
//     <LogoImg src={logoSrc} alt={altText}/>
//     <ButtonText>{buttonText}</ButtonText>
//   </BtnStyle>
// );

const SignInPage = () => {
  return (
    <Container>
      <h1>더 이상 추천받지 않는 안전을 위하여,</h1>
      <TireLogoStyle src={TireLogo} alt="로고" />
      <BtnStyleWrapper>
        <LoginButton logoSrc={NaverIcon} altText="네이버 로그인" buttonText="네이버 로그인" backgroundColor="#03C75A"/>
        <LoginButton logoSrc={KakaoIcon} altText="카카오 로그인" buttonText="카카오 로그인" backgroundColor="#FEE500" />
        <LoginButton logoSrc={GoogleIcon} altText="구글 로그인"  buttonText="구글 로그인"backgroundColor=" #FFFFFF"/>
      </BtnStyleWrapper>
    </Container>
  );
};

export default SignInPage;
