import styled from "styled-components";
import {BsFillArrowRightCircleFill} from "react-icons/bs"

const Nav = styled.div`
    width: 951px;
    height: 209px;
    border-radius: 100px;
    background: #FFFFFF;
    box-shadow: 0.5px 0.5px 40px 10px #EFEFF1;
    margin: 0 auto;
    display: grid;
    place-content: center;
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
`
function SearchForm() {
    return (
        <Nav>
            <p>총 7,777개의 멋진 타이어들이 검색만 기다리고 있대요.</p>
            <Button>
                <h1>조건에 맞는 타이어 찾기</h1>
                <BsFillArrowRightCircleFill className="arrow" size="50"/>
            </Button>
        </Nav>
    );  
}

export default SearchForm;