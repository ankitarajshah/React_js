import React from 'react';
import Demo from './demo';
import Home from './Home';


import Loops from './03_Loops';
import Compo from './04_Compo';
import ReUsableCompo from './ReUsableCompo';
import State from './05_State';
import Lifecycle from './06_lifecycle'
import Fetchapi from './07_Fetchapi'
import ButtonClick from './08_ButtonClick';

import UseState from './Function/01_UseState';
import UseEffect from './Function/02_UseEffect';
import UseEffect_fetch from './Function/03_UseEffect_fetch';
import UseRef from './Function/04_UseRef';
import UseReducer from './Function/05_UseReducer';
import UseContext from './Function/06_UseContext';
import UseDebugValue from './Function/07_UseDebugValue';
import Imperative from './Function/08_Imperative';



import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
  } from "react-router-dom";


function  header(props) {

    const Menu ={'/demo':'Demo','/home':'Home','/loops':'Loops','/compo':'Compo',
    '/state':'State','/lifecycle':'Lifecycle','/reusablecompo':'ReUsableCompo','/fetchapi':'Fetchapi','/buttonclick':'Buttonclick',
    'UseState':'UseState','/UseEffect':'UseEffect','/UseEffect_fetch':'UseEffect_fetch','/UseRef':'UseRef',
    '/usereducer':'UseReducer','/usecontext':'UseContext','/usedebugvalue':'useDebugValue',
    '/imperative':'Imperative' }
    console.log(Menu);
    const returnData = Object.entries(Menu).map((res,i,arr)=>
    {
        return <li className ="nav-item" key={i}>
            <Link className='nav-link' to={res[0]}>{res[1]}</Link>
        </li>
    })
    return (
        <>
        <Router>
        <nav className ="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className ="container-fluid">
                <a className ="navbar-brand" href="#">Navbar</a>
                <button className ="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className ="navbar-toggler-icon"></span>
                </button>
            <div className ="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className ="navbar-nav me-auto mb-2 mb-lg-0">
                    {returnData}
                </ul>
                </div>
            </div>
        </nav>

        <Routes>
            <Route path='/demo' element={<Demo/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/loops' element={<Loops/>}/>
            <Route path='/compo' element={<Compo/>}/>
            <Route path='/ReUsableCompo' element={<ReUsableCompo/>}/>
            <Route path='/state' element={<State/>}/>
            <Route path='/lifecycle' element={<Lifecycle/>}/>
            <Route path='/Fetchapi' element={<Fetchapi/>}/>
            <Route path='/ButtonClick' element={<ButtonClick/>}/>
            <Route path='/UseState' element={<UseState/>}/>
            <Route path='/UseEffect' element={<UseEffect/>}/>
            <Route path='/UseEffect_fetch' element={<UseEffect_fetch/>}/>
            <Route path='/UseRef' element={<UseRef/>}/>
            <Route path='/UseReducer' element={<UseReducer/>}/>
            <Route path='/UseContext' element={<UseContext/>}/>
            <Route path='/useDebugValue' element={<UseDebugValue/>}/>
            <Route path='/imperative' element={<Imperative/>}/>
        </Routes>
        </Router> 
        </>
    );
}

export default header;