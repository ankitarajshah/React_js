import React, { useEffect, useLayoutEffect, useState } from 'react';

function UseEffect(props) {

    const[vara,setvara]= useState(0);
    const[varname,setvarname]= useState("Tops");

    useEffect(()=>{
        setTimeout(() => {
            console.log("UseEffect called");
        }, 2000);
    })

    useLayoutEffect(()=>{
        console.log("UseLayoutEffect called");
        return changeData
    },[vara,varname])

    function changeData(){
        console.log("function called");
        setvara(50);
        setvarname("Tops Tech");
    }
    const[count,setcount]=useState(0)
    useEffect(()=>{
        setTimeout(() => {
            console.log("Counter called");
            console.log(document.title=`you have clicked ${count} times`)
        }, 2000);
})

    return (
        <div>
            <div className="container">
                <div className="row mt-5">
                    <div className="col">
                        <h1>{vara}</h1>
                        <button className='btn btn-primary' onClick={changeData}>Click me</button>
                        <h1>{varname}</h1>
                        <h3>{count}</h3>
                        <button className='btn btn-primary' onClick={()=>{setcount(count+1)}}>Click me</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UseEffect;