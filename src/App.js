import { Header, TopBar, Footer} from "components";
import RecommandBoard from "components/main/recommand/RecommandBoard";
import SignInPage from "./pages/auth/SignInPage";
import ReviewBoard from "components/main/review/ReviewBoard";

function App() {
  return (
    <div className="App">
    <div>
      <TopBar/>
      <Header/>
      <ReviewBoard/>
    </div>
  </div>
  );
};

export default App;