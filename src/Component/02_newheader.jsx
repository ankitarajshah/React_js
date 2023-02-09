import React from 'react';

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
  } from "react-router-dom";

  import Home from './Home';
  import Demo from './demo';

function newheader(props) {
    const MenuData ={'/home':'Home','/demo':'Demo'}
    const AllData = Object.entries(MenuData).map((response,id)=>
    {
        return <li className="nav-item"  key={id}>
                <Link className="nav-link" to={response[0]}>{response[1]}</Link>
            </li>   
    }
    )
    return (
        <div>
        <Router>

            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <div className="container-fluid">
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                        {AllData}
                    </ul>
                </div>
            </div>
            </nav>

            <Routes>
                <Route path="/home" element={<Home/>}></Route>
                <Route path="/demo" element={<Demo/>}></Route>
            </Routes>

        </Router>
        </div>
    );
}

export default newheader;