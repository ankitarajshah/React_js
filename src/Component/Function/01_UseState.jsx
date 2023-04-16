import React, { useState } from 'react';

export default function UseState(props) {
 const[vara,setvara]=useState(0);
 const[varb,setvarb]=useState(10);

 function BtnClick() {
    setvara(10);
    setvarb(20);
 }

  return (
    <div>
      <div className="container">
        <div className="row mt-5">
            <div className="col">
                <h2>{vara+varb}</h2>
                <button className='btn btn-primary' onClick={BtnClick}>Click</button>
                <h1>{vara}</h1>
                <button className='btn btn-primary' onClick={()=>{setvara(30)}}>Click me</button>
            </div>
        </div>
      </div>
    </div>
  )
}
