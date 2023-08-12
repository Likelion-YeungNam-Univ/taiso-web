import Slider from "./Slider";
import AdPart from "./AdPart";
import { HotBoard, RecommandBoard, StoryBoard } from "components";

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