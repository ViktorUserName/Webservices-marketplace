import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Head} from './components/header';

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
  </React.StrictMode>
);


