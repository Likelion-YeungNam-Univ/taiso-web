import { Header, TopBar } from "components";
import RecommandBoard from "components/main/recommand/RecommandBoard";
import SignInPage from "./pages/auth/SignInPage";

function App() {
  return (
    <div className="App">
    <div>
      <TopBar/>
      <Header/>
      <RecommandBoard/>
    </div>
  </div>
  );
};

export default App;