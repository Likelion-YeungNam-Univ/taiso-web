import SearchHeader from "pages/search/SearchHeader";
import Description from "./Description";
import TireDetailsItem from "./TireDetailsItem";
import RecommandSlider from "./RecommandSlider";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const TireDetailsPage = () => {

    const location = useLocation();
    const [id, setId] = useState(
        location.state?.id
    );
  

    useEffect(() => {
        
        // const queryParam = new URLSearchParams(location.search);
        // setId(queryParam.get("id"));
        console.log("[INFO] : id : " + id);
    }, []);
    return (
        <div>
            <SearchHeader/>
            <TireDetailsItem id= {id}/>
            <Description/>
            <RecommandSlider/>
        </div>
    );
};

export default TireDetailsPage;