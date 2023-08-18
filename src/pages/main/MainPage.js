import Slider from "./Slider";
import AdPart from "./AdPart";
import { HotBoard, RecommandBoard, StoryBoard } from "components";
import axios from "axios";
import { useState } from "react";

const MainPage = () => {
  console.log(window.localStorage.getItem("is_login"));

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