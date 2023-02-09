import React from 'react';
import Demo from './demo';
import Home from './Home';
import State from './05_State';
import Lifecycle from './06_lifecycle'

import Loops from './03_Loops';
import Compo from './04_Compo';

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
  } from "react-router-dom";


function  header(props) {

    const Menu ={'/demo':'Demo','/home':'Home','/loops':'Loops','/compo':'Compo','/state':'State','/lifecycle':'Lifecycle'}
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
            <Route path='/state' element={<State/>}/>
            <Route path='/lifecycle' element={<Lifecycle/>}/>
        </Routes>
        </Router> 
        </>
    );
}

export default header;