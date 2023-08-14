import { styled } from "styled-components";
import { IoSearchCircleSharp } from 'react-icons/io5';
import { useState } from "react";

const Search = styled.div`
    width: 1200px;
    height: 133px;
    flex-shrink: 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.30);
    display: flex;
    align-items: center;
    margin: 0 auto;
`
const Input = styled.input`
    width: 486px;
    height: 55px;
    flex-shrink: 0;
    border-radius: 35px;
    border: 1px solid #6F6F6F;
    outline: none;
    font-size: 18px;
    /* letter-spacing: -.1px; */
    padding-left: 30px;
  

    &::placeholder {
        color: #6F6F6F;
        font-family: Noto Sans KR;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: 0.36px;
        width: 381px;
        margin-left: 20px;
        padding: 0px;
};
`
const H1 = styled.h1`
    color: #000;
    text-align: center;
    font-family: IBM Plex Sans KR;
    font-size: 40px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`
const SearchBox = styled.div`
    display: flex;
    align-items: center;
    margin-left: auto;

`
const IoSearch = styled(IoSearchCircleSharp)`
    position: absolute;
    margin-left: 460px;
    width: 37px;
    height: 37px;
    flex-shrink: 0;
`

const SearchHeader = () => {

     // enter와 버튼을 눌렀을 때 이벤트 활성화 구현

    const [inputText, setInputText] = useState("");
    const activeButton = () => {
      alert(`${inputText} 입력 완료`); // 이건 확인용입니다.
    }
    const activeEnter = (e) => {
      if(e.key === "Enter") {
        activeButton();
    };
};

    return (
       <Search>
            <H1>타이어 검색</H1>
            <SearchBox>
                <Input type="text" placeholder="원하는 타이어 상품명을 검색해보세요."
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyDown={(e) => activeEnter(e)}
                />
                <IoSearch onClick={activeButton}/>
            </SearchBox>
       </Search>
    );
};

export default SearchHeader;