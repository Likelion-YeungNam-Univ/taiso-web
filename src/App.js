import { Header, TopBar, Footer} from "components";
import { MainPage } from "pages";

// import RecommandBoard from "components/main/recommand/RecommandBoard";

// import SignInPage from "./pages/auth/SignInPage";



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
    </div>
  
  );
};

export default App;