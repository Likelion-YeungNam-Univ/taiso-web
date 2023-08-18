import SearchHeader from "pages/search/SearchHeader";
import { ResultBoard, SearchFilter, SearchReacommendBoard, ResultList } from "components";
import styled from "styled-components";
import PageAd from "./PageAd";
import { useEffect } from "react";

const Page = styled.div`
 
`

const Nav = styled.div`
    display: flex;
    align-self: center;
    justify-content: center;
`
const Filter = styled.div`
    // margin-right: 20px;
`


const SearchPage = () => {

    function ScrollToTopOnMount() {
        useEffect(() => {
          window.scrollTo(0, 0);
        }, []);
      
        return null;
      }

    return(
        <Page>
            <Filter>
                <ScrollToTopOnMount />
            </Filter>
            <ResultList/>
        </Page>
    );
}

export default SearchPage;
