import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import Blocks from './chapter_15/Blocks';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // <React.StrictMode>  //  컴포넌트를 마운트 시켰다가 언마운트 시키는 과정을 거친다.
  <Blocks />
  // </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
