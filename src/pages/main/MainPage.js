import Slider from "./Slider";
import RecommandBoard from "components/main/recommand/RecommandBoard";
import HotBoard from "components/main/hot/HotBoard";


const MainPage = () => {
  return (
    <div>
        <Slider/> 
        <HotBoard/>
        <RecommandBoard/>
    </div>
  );
};

export default MainPage;