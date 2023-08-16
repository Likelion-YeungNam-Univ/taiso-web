import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import "antd/dist/antd";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>

);



// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import { BrowserRouter } from 'react-router-dom';
// import 'antd/dist/antd'; // Import Ant Design styles

// ReactDOM.render(
//   <BrowserRouter>
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   </BrowserRouter>,
//   document.getElementById('root')
// );
