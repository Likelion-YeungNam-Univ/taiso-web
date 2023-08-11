import { Header, TopBar, Footer} from "components";
import { MainPage } from "pages";
import { NewsPage } from "pages"

const App = () => {
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
  // <NewsPage></NewsPage>
     );
};

export default App;