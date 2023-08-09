import { Header, TopBar, Footer} from "components";
import { MainPage } from "pages";







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
  
  );
};

export default App;