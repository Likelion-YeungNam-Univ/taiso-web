import { Header, TopBar, Footer} from "components";
// import RecommandBoard from "components/main/recommand/RecommandBoard";
// import SignInPage from "./pages/auth/SignInPage";
import HotBoard from "components/main/hot/HotBoard";

function App() {
  return (
    <div className="App">
    <div>
      <TopBar/>
      <Header/>
      <Footer/>
      <HotBoard/>
      {/* <RecommandBoard/> */}
    </div>
  </div>
  );
};

export default App;