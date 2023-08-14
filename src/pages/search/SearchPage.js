import SearchHeader from "./SearchHeader"
import { SearchFilter } from "components";

const SearchPage = () => {
    return(
        <div>
            <SearchHeader/>
            <SearchFilter/>
            {/* <ResultBoard/> */}
        </div>
    );
}

export default SearchPage;