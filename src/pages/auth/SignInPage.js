import React from "react";
import tireLogo from "../../assets/tireLogo.jpg"; 
import naverLogo from "../../assets/naverLogo.png"; 
import kakaoLogo from "../../assets/kakaoLogo.png"; 
import googleLogo from "../../assets/googleLogo.png"; 
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TireLogoStyle = styled.img`
  width: 265px;
  height: 75px;
`;

const LoginBtnStyle = styled.div`
display: flex;
align-items: center;
`;

const BtnSytle = styled.button`

//color: ${({ theme }) => theme.White};

  align-items: center;
  justify-content: center;
  width: 300px;
  height: 56px;
  background-color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
`;


const SignInPage = () => {


  return (
    <Container>
      <h1>더 이상 추천받지 않는 안전을 위하여,</h1>
      <TireLogoStyle src={tireLogo} alt = "로고" />
      <BtnSytle>
      <LoginBtnStyle>
        <button>
        <img src={naverLogo} alt = "네이버 로고" />
      </button>
    </LoginBtnStyle>
    <LoginBtnStyle>
        <button>
        <img src={kakaoLogo} alt = "카카오 로고" />
      </button>
    </LoginBtnStyle>
    <LoginBtnStyle>
        <button>
        <img src={googleLogo} alt = "구글 로고" />
        </button>
    </LoginBtnStyle>
    </BtnSytle>
    </Container>
  );
};

export default SignInPage;
