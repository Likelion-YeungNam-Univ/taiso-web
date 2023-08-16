import SearchHeader from "pages/search/SearchHeader";
import Description from "./Description";
import TireDetailsItem from "./TireDetailsItem";
import RecommandSlider from "./RecommandSlider";


const TireDetailsPage = () => {
    return (
        <div>
            <SearchHeader/>
            <TireDetailsItem/>
            <Description/>
            <RecommandSlider/>
        </div>
    );
};

export default TireDetailsPage;