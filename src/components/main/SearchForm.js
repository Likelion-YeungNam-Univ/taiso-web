import styled from "styled-components";
import {BsFillArrowRightCircleFill} from "react-icons/bs"
import { useNavigate } from "react-router-dom";

const Nav = styled.div`
    width: 951px;
    height: 209px;
    border-radius: 100px;
    background: #FFFFFF;
    /* box-shadow: 0.5px 0.5px 10px 10px #EFEFF1; */
    box-shadow: 0px 16px 40px 0px rgba(112, 144, 176, 0.20);
    margin: 0 auto;
    display: grid;
    place-content: center;
    position: relative;
    /* z-index: 1; */
    /* transform: translate(500px, -100px); */
    p {
        font-size: 30px;
        font-family: 'IBM Plex Sans KR', sans-serif;
        text-align: center;
    }
`
const Button = styled.div`
    width: 575px;
    height: 91px;
    border-radius: 30px;
    background: black;
    margin: 0 auto;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    h1 {
        font-size: 40px;
        font-family: 'IBM Plex Sans KR', sans-serif;
        color: white;
    }
    .arrow{
        color: #7C7C7C; 
        margin-left: 1.5rem;
    }
    cursor: pointer;
`
function SearchForm() {

    const movePage = useNavigate();

    function goSearch() {
        movePage('/search');
    }


    

    return (
        <Nav>
            
            <p>총 7,777개의 멋진 타이어들이 검색만 기다리고 있대요.</p>
            <Button onClick={goSearch}>
                <h1 onClick={goSearch}>조건에 맞는 타이어 찾기</h1>
                <BsFillArrowRightCircleFill className="arrow" size="50"/>
            </Button>
        </Nav>
    );  
}

export default SearchForm;