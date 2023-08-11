import Slider from "./Slider";
import AdPart from "./AdPart";
import { Footer, Header, HotBoard, RecommandBoard, StoryBoard, TopBar } from "components";

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