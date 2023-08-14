import { ReactComponent as SearchPageAd } from "assets/images/search/SearchPageAd.svg";
import styled from "styled-components";

const MiddleAd = styled.div`
  display:flex;
  align-items: center;
  justify-content:center;
  margin-top: 50px;
  margin-bottom: 50px;
`
const PageAd = () => {
    return (
        <MiddleAd>
            <SearchPageAd/>
        </MiddleAd>
    );
};

export default PageAd;