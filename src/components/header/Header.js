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
`
const Logo = styled.div`
    flex: 5;
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    cursor: pointer;
`

const Gnb = styled.div`
    flex: 5;
    
    ul {
        display:flex;
        align-items: center;
        justify-content:center;
        list-style: none;
        margin: 0;
        padding: 0;
    }

    li {
        margin-right: 50px;
        font-size: 18px;
        cursor: pointer;
        border-radius: 10px;
        padding: 3px 10px 3px 10px;
    }

    li:hover,
    li.active {
        background: #2D2926;
        color: #FFFFFF;
   }
`

const Header = () => {
    const movePage = useNavigate();

    function goNews() {
        movePage('/news');
    }
    return (
        <Nav>
            <Logo onClick={() => {movePage("/main")}}>
                <HeaderLogo/>
            </Logo>
            <Gnb>
                <ul>
                    <li onClick={() => {movePage("/main")}}>홈</li>
                    <li onClick={() => {movePage("/search")}}>타이어 검색</li>
                    {/* <li onClick={() => {("")}}>커뮤니티</li> */}
                    <li onClick={goNews}>뉴스</li>
                    <li onClick={() => {movePage("/mypage")}}>로그인</li>
                </ul>
            </Gnb>    
        </Nav>
    );
};

export default Header;

