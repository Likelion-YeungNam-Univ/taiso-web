import { Header, TopBar, Footer} from "components";
// import RegisterCar from "components/mypage/RegisterCar";
import { SignInPage, MainPage, NewsPage, SearchPage, MyPage, RegisterCarPage } from "pages";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <TopBar />
      <Header />
<Routes>
      <Route path="/" element={<SignInPage/>}></Route>
      <Route path="/main" element={<MainPage/>}></Route>
      <Route path="/news" element={<NewsPage/>}></Route>
      <Route path="/search" element={<SearchPage/>}></Route>
      <Route path="/mypage" element={<MyPage/>}></Route>
      <Route path="/register/car" element={<RegisterCarPage/>}></Route>
    </Routes> 
    <Footer/>
    </div> 
  );
};

export default App;