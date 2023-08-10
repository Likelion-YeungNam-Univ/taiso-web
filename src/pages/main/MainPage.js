import Slider from "./Slider";
import HotBoard from "components/main/hot/HotBoard";
import StoryBoard from "components/main/story/StoryBoard";
import RecommandBoard from "components/main/recommand/RecommandBoard";
import AdPart from "./AdPart";
import SearchForm from "components/main/SearchForm";


const MainPage = () => {
  return (
    <div>
        <Slider/> 
        <SearchForm/>
        <HotBoard/>
        <AdPart/>
        <RecommandBoard/>
       <StoryBoard/>
    </div>
  );
};

export default MainPage;