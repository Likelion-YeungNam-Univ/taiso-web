// import {BrowserRouter, Route, Routes } from 'react-router-dom'
// import SignInPage from './pages';

// function App() {
//   return (
//     <BrowserRouter> 
//       <Routes>
//        <Route path="/login" element={<SignInPage />}/>
//         {/* <Route path="/register" element={<RegisterPage />}/> */}
//         {/* <Route path="/" element={<MainPage />} /> */}
//         {/* <Route path="/*" element={<NotFoundPage />}/> */} {/* 404 Not Found */}
//       </Routes>
//   </BrowserRouter>
//   );
// }


import SignInPage from "./pages/auth/SignInPage";
import { Header, TopBar} from "components";

function App() {
  return (
    <div className="App">
    <div>
      <SignInPage />
      <TopBar/>
      <Header/>
    </div>
  </div>
  );
};

export default App;