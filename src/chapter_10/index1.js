import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import MainPage from './chapter_09/MainPage';
import LandingPage from './chapter_09/LandingPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((e, index) =>
  <li key = {index}>{e}</li>);

root.render(
  // <React.StrictMode>  //  컴포넌트를 마운트 시켰다가 언마운트 시키는 과정을 거친다.
  <ul>{listItems}</ul>
  // </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
