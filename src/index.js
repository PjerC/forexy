import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import reportWebVitals from '.Other/reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'


const Main = (props) => {
  // initial states
  const [backgroundColor,setBackgroundColor] = useState('rgb(19,23,34)');

  return (
    <App  backgroundColor={backgroundColor} setBackgroundColor={setBackgroundColor} />
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Main/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
