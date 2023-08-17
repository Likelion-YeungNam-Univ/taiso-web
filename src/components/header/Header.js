import { ReactComponent as HeaderLogo } from "assets/images/logo/HeaderLogo.svg";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

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
            padding: 3px 10px;
        }

        p {
            border-radius: 40px;
            padding: 3px 25px;
            background: #2D2926;
            flex-shrink: 0;
            color: #FFF;
        }
    }
    
    @media screen and (max-width: 908px) {
        ul {
            display: none; 
        }
    }
`;

const Header = () => {
    const movePage = useNavigate();

    function goNews() {
        movePage('/news');
    }

    return (
        <Nav>
            <Logo onClick={() => { movePage("/main") }}>
                <HeaderLogo />
            </Logo>
            <Gnb>
                <ul>
                    <li onClick={() => { movePage("/main") }}>홈</li>
                    <li onClick={() => { movePage("/search") }}>타이어 검색</li>
                    <li onClick={goNews}>뉴스</li>
                    <li onClick={() => { movePage("/mypage") }}><p>로그인</p></li>
                </ul>
            </Gnb>
        </Nav>
    );
};

export default Header;
