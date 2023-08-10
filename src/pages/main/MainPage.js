import Slider from "./Slider";
import AdPart from "./AdPart";
import { Footer, Header, HotBoard, RecommandBoard, StoryBoard, TopBar } from "components";

const MainPage = () => {
  return (
    <div>
      <TopBar/>
      <Header/>
      <Slider/> 
      <HotBoard/>
      <AdPart/>
      <RecommandBoard/>
      <StoryBoard/>
      <Footer/>
    </div>
  );
};

export default MainPage;