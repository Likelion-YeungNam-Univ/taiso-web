import { ReactComponent as Ad } from "assets/images/mainpage/Ad.svg";
import styled from "styled-components";

const MiddleAd = styled.div`
  display:flex;
  align-items: center;
  justify-content:center;
`
const AdPart = () => {
    return (
        <MiddleAd>
            <Ad/>
        </MiddleAd>
    );
};

export default AdPart;