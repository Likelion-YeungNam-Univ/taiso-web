import React from "react";
import TireLogo from "../../assets/images/login/TireLogo.jpg"; 
import Kakao from "../../assets/images/login/KakaoLogo.png"
import Naver from "../../assets/images/login/NaverLogo.png";
import Google from "../../assets/images/login/GoogleLogo.png";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Container = styled.div`
  flex-direction: column;
  text-align: center;
  align-items: center;
`;

const TireLogoStyle = styled.img`
  width: 265px;
  height: 75px;
  margin: 0 auto;
  margin-bottom: 100px;
  cursor: pointer;
`;

const BtnStyleWrapper = styled.div`
  flex-direction: column;
  margin-top: 20px;
  display: flex;
align-items: center;
margin-bottom:100px;
`;

const LoginLogo = styled.div`
width: 250px;
height:57px;
padding: 10px;
margin-bottom:10px;
img {
  background: #E5E1E1;
  width: 100%;
  height: 100%;
  // border-radius: 5px;
}
`

const OnNaverSignClick = () =>{
  // useEffect(() => {
  //   axios.get('https://208d-175-119-150-172.ngrok-free.app/oauth2/authorization/naver')
  // })
  // axios.get("https://208d-175-119-150-172.ngrok-free.app/oauth2/authorization/naver");
  // https://d0d7-175-119-150-172.ngrok-free.app/swagger-ui/index.html#/OAuth/naverLogin
  // https://d0d7-175-119-150-172.ngrok-free.app/oauth2/authorization/naver
  // /api'+'/oauth2/authorization/naver
  axios.get('https://d0d7-175-119-150-172.ngrok-free.app/oauth2/authorization/naver',{withCredentials: true});
  
}
const OnKakaorSignClick = () =>{
  axios.get("https://208d-175-119-150-172.ngrok-free.app/oauth2/authorization/kakao",{withCredentials: true});
}
const OnGoogleSignClick = () =>{
  axios.get("https://208d-175-119-150-172.ngrok-free.app/oauth2/authorization/google",{withCredentials: true});
}

const SignInPage = () => {

  const movePage = useNavigate();

    function goMain() {
        movePage('/main');
    }


  return (
    <Container>
      <h1>더 이상 추천받지 않는 안전을 위하여,</h1>
      <TireLogoStyle src={TireLogo} alt="로고" onClick={goMain}/>
      <BtnStyleWrapper>
        <LoginLogo onClick={OnNaverSignClick}><img src={Naver}/></LoginLogo>
        <LoginLogo onClick={OnKakaorSignClick}><img src={Kakao}/></LoginLogo>
        <LoginLogo onClick={OnGoogleSignClick}><img src={Google}/></LoginLogo>
      </BtnStyleWrapper>
    </Container>
  );
};

export default SignInPage;
