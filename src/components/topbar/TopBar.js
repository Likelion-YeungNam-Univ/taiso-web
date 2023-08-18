import { HiOutlineSpeakerphone } from "react-icons/hi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Top = styled.div`
    width: 100%;
    height: 40px;
    background: #2D2926;
    font-family: 'Noto Sans KR', sans-serif;
    color: #FFFFFF;
    top: 0;
    position: sticky;
    display: ${(props) => (props.visible ? "flex" : "none")};
    align-items: center;
    font-size: 12px;
    justify-content: center;
    z-index: 10;
    cursor: pointer;
    
`

const TopCenter = styled.div`
    display:flex;
    align-items: center;
    position: relative;
`

const SpeakerIcon = styled(HiOutlineSpeakerphone)`
    margin-right: 20px;
    font-size: 19px;
`

const CloseIcon = styled(AiOutlineCloseCircle)`
    margin-left: 870px;
    font-size: 19px;
    position: absolute;
`

const TopBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleCloseIconClick = () => {
    setIsVisible(false);
  };

  const movePage = useNavigate();

  return (
    <Top visible={isVisible}>
        <TopCenter onClick={() => {movePage("/")}}>
            <SpeakerIcon />
            <span>타이소에 로그인하고 타이어 할인 혜택을 받아보세요!</span>
        </TopCenter>      
        <CloseIcon onClick={handleCloseIconClick}/>
    </Top>
  );
};

export default TopBar;


