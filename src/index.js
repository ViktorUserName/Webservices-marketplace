import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Head} from './components/header';
import {Services} from './components/services';


// const App = () => {
//   return (
//     <div>
//       <Head />
//     </div>
//   )
// };

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Head />
    <Services />
  </React.StrictMode>
);


