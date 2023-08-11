import { Header, TopBar, Footer} from "components";
import { SignInPage, MainPage, NewsPage } from "pages";
import { SearchPage } from "pages/search";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SignInPage/>}></Route>
      <Route path="/main" element={<MainPage/>}></Route>
      <Route path="/news" element={<NewsPage/>}></Route>
      <Route path="/search" element={<SearchPage/>}></Route>
    </Routes>  
  );
};

export default App;