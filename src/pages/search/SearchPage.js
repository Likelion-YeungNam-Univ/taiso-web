import SearchHeader from "pages/search/SearchHeader";
import { ResultBoard, SearchFilter, SearchReacommendBoard} from "components";
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
const Board = styled.div``

const SearchPage = () => {

    function ScrollToTopOnMount() {
        useEffect(() => {
          window.scrollTo(0, 0);
        }, []);
      
        return null;
      }

    return(
        <Page>
            <ScrollToTopOnMount />
            <SearchHeader/>
            <Nav>
                <SearchFilter/>
                <Board>
                    <SearchReacommendBoard/>
                    <PageAd/>
                    <ResultBoard/>
                </Board>
               
            </Nav>
            
        </Page>
    );
}

export default SearchPage;
