import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import 'bootstrap5/src/css/bootstrap.min.css'

import App from './App';
import reportWebVitals from './reportWebVitals';
// import Demo from './demo'
// import Test from './testdemo'
// import Demotest from './demotest'
// import Demojsx from './Component/demo'

import Header from './Component/01_header';
// import NewHeader from './Component/02_newheader';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Demo/>
    <Test/>
    <Demotest/>
    <Demojsx/> */}
   
    <Header/>
    {/* <NewHeader /> */}
    

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
