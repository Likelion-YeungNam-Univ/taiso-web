import Slider from "./Slider";
import AdPart from "./AdPart";
import { HotBoard, RecommandBoard, StoryBoard, SearchForm } from "components";

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