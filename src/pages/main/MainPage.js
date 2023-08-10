import Slider from "./Slider";
import HotBoard from "components/main/hot/HotBoard";
import StoryBoard from "components/main/story/StoryBoard";
import RecommandBoard from "components/main/recommand/RecommandBoard";
import AdPart from "./AdPart";


const MainPage = () => {
  return (
    <div>
        <Slider/> 
        <HotBoard/>
        <AdPart/>
        <RecommandBoard/>
       <StoryBoard/>
    </div>
  );
};

export default MainPage;