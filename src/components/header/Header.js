import { ReactComponent as HeaderLogo } from "assets/images/logo/HeaderLogo.svg";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState,useEffect } from "react";

const Nav = styled.div`
    width: 100%;
    height: 133px;
    position: sticky;
    display: flex;
    align-items: center;
    font-family: 'Nunito', sans-serif;
    border-bottom: 1px solid rgba(0, 0, 0, 0.30);
`;

const Logo = styled.div`
    flex: 5;
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    cursor: pointer;
`;

const Gnb = styled.div`
    flex: 5;
    position: static;
    ul {
        display: flex;
        align-items: center;
        justify-content: center;
        list-style: none;
        margin: 0;
        padding: 0;

        li {
            margin-right: 40px;
            font-size: 16px;
            cursor: pointer;
            border-radius: 10px;
            padding: 10px 2px;
            
        }
        
        li p:hover{background: #e9ecef; color:black;}

        p {
            border-radius: 40px;
            padding: 3px 25px;
            // background: #2D2926;
            flex-shrink: 0;
            // color: #FFF;
        }
    }
    
    @media screen and (max-width: 1070px) {
        ul {
            display: none; 
        }
    }
`;

const P = styled.span`
    border-radius: 40px;
    padding: 3px 25px;
    background: #2D2926;
    flex-shrink: 0;
    color: #FFF;
`


const Header = () => {
    const movePage = useNavigate();

    function goNews() {
        movePage('/news');
    }

    const [check, setCheck] = useState('');

    useEffect(()=>{
        axios({
            method: 'get',
            url: `http://www.tireso.co.kr:8080/auth`,
        
          }, { withCredentials : true })
            .then((res)=>{
            setCheck(res.data)
            
             //console.log(res.data.email);
          }).catch((Error)=>{
              console.log(Error);
          })
    })
    console.log(check)


    return (
        <Nav>
            <Logo onClick={() => { movePage("/main") }}>
                <HeaderLogo />
            </Logo>
            <Gnb>
                <ul>
                    
                    <li onClick={() => { movePage("/main") }}><p>홈</p></li>
                    <li onClick={() => { movePage("/search") }}><p>타이어 검색</p></li>
                    <li onClick={goNews}><p>뉴스</p></li>
                    <li onClick={() => { movePage("/mypage") }}><P>로그인</P></li>
                    <li onClick={() => { movePage("/main") }}>홈</li>
                    <li onClick={() => { movePage("/search") }}>타이어 검색</li>
                    <li onClick={goNews}>뉴스</li>
                    <div>
                        {check == -1 
                        ? 
                        <li onClick={() => { movePage("/mypage") }}><p>로그인</p></li> 
                        : 
                        <li> <p>프로필 보기</p></li>
                        }
                    </div>   
                    
                </ul>
            </Gnb>
        </Nav>
    );
};

export default Header;
