import { HiOutlineSpeakerphone } from "react-icons/hi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import styled from "styled-components";
import { useState } from "react";

const Top = styled.div`
  width: 100%;
  height: 40px;
  background: #2D2926;
;
  color: #FFFFFF;
  top: 0;
  position: sticky;
  display: ${(props) => (props.visible ? "flex" : "none")};
  align-items: center;
  font-size: 12px;
  justify-content: center;
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

  return (
    <Top visible={isVisible}>
        <TopCenter>
            <SpeakerIcon />
            <span>타이소에 회원가입하고 타이어 할인 혜택을 받아보세요!</span>
        </TopCenter>      
        <CloseIcon onClick={handleCloseIconClick}/>
    </Top>
  );
};

export default TopBar;


