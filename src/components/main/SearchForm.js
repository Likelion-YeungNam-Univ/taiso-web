import styled from "styled-components";

const Nav = styled.div`
    width: 951px;
    height: 209px;
    border-radius: 100px;
    background: #FFFFFF;
    box-shadow: 0.5px 0.5px 40px 10px #EFEFF1;
    display: flex;
    align-items: center;
    flex-flow: wrap;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);

    h2 {
        font-size: 30px;
        font-family: 'IBM Plex Sans KR', sans-serif;
    }

    div {
        width: 402px;
        height: 91px;
        box-shadow: 0.5px 0.5px 50px 10px #EFEFF1;
        border-radius: 30px;
    }

    h1 {
        font-size: 40px;
        font-family: 'IBM Plex Sans KR', sans-serif;
        color: ${props => props.textcolor || "white"};
    }
`

function SearchForm(props) {
    return (
        <Nav>
            <h2>총 7,777개의 멋진 타이어들이 검색만 기다리고 있대요.</h2>
            <div background="#111111">
                <h1 color="#FFFFFF">차종으로 찾기</h1>
            </div>
            <div background="#FFFFFF">
                <h1 color="#6F6F6F">사이즈로 찾기</h1>
            </div>
        </Nav>
    );  
}

export default SearchForm;