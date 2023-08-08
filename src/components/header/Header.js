import { ReactComponent as HeaderLogo } from "assets/images/HeaderLogo.svg";
import styled from "styled-components";

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
    return (
        <Nav>
            <Logo>
                <HeaderLogo/>
            </Logo>
            <Gnb>
                <ul>
                    <li onClick={() => {("")}}>홈</li>
                    <li onClick={() => {("")}}>타이어 검색</li>
                    {/* <li onClick={() => {("")}}>커뮤니티</li>
                    <li onClick={() => {("")}}>뉴스</li> */}
                    <li onClick={() => {("")}}>로그인</li>
                </ul>
            </Gnb>    
        </Nav>
    );
};

export default Header;

