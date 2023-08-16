import SearchHeader from "pages/search/SearchHeader";
import { ResultBoard, SearchFilter, SearchReacommendBoard, ResultList } from "components";
import styled from "styled-components";
import PageAd from "./PageAd";

const Page = styled.div`
    
`

const Nav = styled.div`
    display: flex;
    align-self: center;
    justify-content: center;
`
const Board = styled.div``

const SearchPage = () => {
    return(
        <Page>
            {/*<SearchHeader/>
            <Nav>
                <SearchFilter/>
                <Board>
                    <SearchReacommendBoard/>
                    <PageAd/>
                    <ResultBoard/>
                </Board>
               
            </Nav>*/}
            <ResultList/>
        </Page>
    );
}

export default SearchPage;
