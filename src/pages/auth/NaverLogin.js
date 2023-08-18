import { useEffect } from 'react'
import { styled } from 'styled-components';
import React from 'react';

const Button = styled.div``

// const NaverL = () => {

//     const NAVER_CLIENT_ID = 'zp5cgCK2J2hPcz_dxndm'
    
// 	const NAVER_CALLBACK_URL = 'http://localhost:3000/'

//     const url = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&state=false&redirect_uri=${NAVER_CALLBACK_URL}`

//     console.log("[INFO] : finalUrl : " + url);
    
//     const ToNaverLogin = () => {
//         window.location.href = url;
//     };

//     return <button id='naverBtn' onClick={ToNaverLogin}> 네이버 로그인</button>;
// }

const NaverLogin = ({ setGetToken, setUserInfo }) => {
      
  
	const { naver } = window
	const NAVER_CLIENT_ID = 'zp5cgCK2J2hPcz_dxndm'
    
	const NAVER_CALLBACK_URL = 'http://localhost:3000/main'

	const initializeNaverLogin = () => {
		const naverLogin = new naver.LoginWithNaverId({
			clientId: NAVER_CLIENT_ID,
			callbackUrl: NAVER_CALLBACK_URL,
          
			isPopup: false,
			loginButton: { color: 'green', type: 3, height: 58 },
			callbackHandle: true,
		})
		naverLogin.init()

      
      naverLogin.getLoginStatus(async function (status) {
			if (status) {
              // 아래처럼 선택하여 추출이 가능하고, 
				const userid = naverLogin.user.getEmail()
				const username = naverLogin.user.getName()
              // 정보 전체를 아래처럼 state 에 저장하여 추출하여 사용가능하다. 
              // setUserInfo(naverLogin.user)
			}
		})     
            // 요기!
	}

   
	    const userAccessToken = () => {
		    window.location.href.includes('access_token') && getToken()
	}
        
      	const getToken = () => {
		const token = window.location.href.split('=')[1].split('&')[0]
	}

        
             // 화면 첫 렌더링이후 바로 실행하기 위해 useEffect 를 사용하였다.
	useEffect(() => {
		initializeNaverLogin()
		userAccessToken()
	}, [])


	return (
        
			<Button id="naverIdLogin" />
	);
};

export default NaverLogin;

