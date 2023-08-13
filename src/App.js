// import { Header, TopBar, Footer} from "components";
// import { SignInPage, MainPage, NewsPage, SearchPage } from "pages";
// import { Routes, Route } from "react-router-dom";
import MyProfile from "components/mypage/myprofile";
import Mycar from "components/mypage/mycar";
import MybookmarkBoard from "components/mypage/mybookmarkBoard";

const App = () => {
  return (
    <div>
    <MyProfile></MyProfile>
    <Mycar></Mycar>
    <MybookmarkBoard></MybookmarkBoard>
    </div>


//     <div>
//       <TopBar/>
//       <Header/>
// <Routes>
//       <Route path="/" element={<SignInPage/>}></Route>
//       <Route path="/main" element={<MainPage/>}></Route>
//       <Route path="/news" element={<NewsPage/>}></Route>
//       <Route path="/search" element={<SearchPage/>}></Route>
//     </Routes> 
//     <Footer/>
//     </div> 
  );
};

export default App;