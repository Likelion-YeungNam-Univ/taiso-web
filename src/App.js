import { Header, TopBar, Footer} from "components";
import { MainPage } from "pages";

// import RecommandBoard from "components/main/recommand/RecommandBoard";

// import SignInPage from "./pages/auth/SignInPage";


import RecommandBoard from "components/main/recommand/RecommandBoard";
import SignInPage from "./pages/auth/SignInPage";
import ReviewBoard from "components/main/review/ReviewBoard";

function App() {
  return (
    <div className="App">
    <div>
      <TopBar/>
    </div>
    <div>
      <Header/>
    </div>
    <div>
      <MainPage/>
    </div>
      <Footer/>
      <ReviewBoard/>
    </div>
  
  );
};

export default App;