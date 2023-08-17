import React, { useEffect, useState } from "react";
import TireLogo from "../../assets/images/login/TireLogo.jpg"; 
import Kakao from "../../assets/images/login/KakaoLogo.png"
import Naver from "../../assets/images/login/NaverLogo.png";
// import Google from "../../assets/images/login/GoogleLogo.png";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import GoogleIcon from "assets/images/login/GoogleIcon.png";
import NaverL from "./NaverLogin";
import { useLocation,Link } from 'react-router-dom';

const Container = styled.div`
  flex-direction: column;
  text-align: center;
  align-items: center;
  margin-top: 200px;
  margin-bottom: 200px;
`

const TireLogoStyle = styled.img`
  width: 265px;
  height: 75px;
  margin: 0 auto;
  margin-bottom: 100px;
  cursor: pointer;
`

const BtnStyleWrapper = styled.div`
  flex-direction: column;
  margin-top: 20px;
  display: flex;
  align-items: center;
  margin-bottom:100px;
`
const LoginLogo = styled.a`
width: 260px;
height:57px;
padding: 10px;
margin-bottom:10px;
img {
  background: #E5E1E1;
  width: 100%;
  height: 100%;
}
`

const GoogleBtn = styled.a`
    display: flex;  
    align-items: center;
    border-radius: 4px;
    border: 1px solid rgba(111, 111, 111, 0.51);
    background: #FFF;
    width: 250px;
    height:57px;
    justify-content: center;
    margin-top: 10px;

`
const P = styled.p`
  color: #808080;
  text-align: center;
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 160%;
`
const GoogleLogo = styled.img`
    width: 18px;
    height: 18px;
    margin-right: 20px;
`

const OnNaverSignClick = async () =>{
  // useEffect(() => {
  //   axios.get('https://208d-175-119-150-172.ngrok-free.app/oauth2/authorization/naver')
  // })
  // axios.get("https://208d-175-119-150-172.ngrok-free.app/oauth2/authorization/naver");
  // https://d0d7-175-119-150-172.ngrok-free.app/swagger-ui/index.html#/OAuth/naverLogin
  // https://d0d7-175-119-150-172.ngrok-free.app/oauth2/authorization/naver
  // /api'+'/oauth2/authorization/naver
  // axios.get('https://d0d7-175-119-150-172.ngrok-free.app/oauth2/authorization/naver',{withCredentials: true});
  await axios({
    method: "get",
    url: "https://b0ce-175-119-150-172.ngrok-free.app/hello",
    responseType: "string",
    withCredentials: true,
  }).then(function (response) {
    console.log(response.data)
  });

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

//     useEffect(() => {
//       try {
//           let code = new URL(window.location.href).searchParams.get("code");
//       console.log(code);
//       const {data: response} = axios.get("http://www.tireso.co.kr:8080/auth/sign-in/naver/callback", {params : {code: code}});
// console.log(response);
//       } catch (err) {
//           console.log(err);
//       }
//   });

useEffect(() => {
  const fetchData = async () => {
      try {
          let code = new URL(window.location.href).searchParams.get("code");
          console.log(code);

          const response = await axios.get(`https://6b17-218-150-7-191.ngrok-free.app/auth/sign-in/naver/callback?code=${code}`, {withCredentials: true});
          console.log(response.data);
      } catch (err) {
          console.log(err);
      }
  };

  fetchData();
}, []);


  //   useEffect(() => {
  //     let code = new URL(window.location.href).searchParams.get("code");
  //     console.log(code);
  // });

  return (
    <Container>
      <h1>더 이상 추천받지 않는 안전을 위하여,</h1>
      <TireLogoStyle src={TireLogo} alt="로고" onClick={goMain}/>
      <NaverL></NaverL>
      <BtnStyleWrapper>        
        {/* <LoginLogo href="https://6b17-218-150-7-191.ngrok-free.app/auth/sign-in/naver"><img src={Naver}/></LoginLogo> */}
        <LoginLogo href="https://6b17-218-150-7-191.ngrok-free.app/auth/sign-in/kakao"><img src={Kakao}/></LoginLogo>
        <GoogleBtn href="https://6b17-218-150-7-191.ngrok-free.app/auth/sign-in/google">
            <GoogleLogo src={GoogleIcon} alt=""/>
            <P>Sign in with Google</P>
        </GoogleBtn>
      </BtnStyleWrapper>
    </Container>
  );
};

export default SignInPage;
