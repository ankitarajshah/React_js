import React, { useEffect, useState, useLayoutEffect } from 'react';

function UseEffect_fetch(props) {
    const[data,setdata]=useState({})
    const[loader,setloader]=useState("Pending....")


useLayoutEffect(() => {
setTimeout(() => {
    setloader("Data found")
}, 2000);

  
}, [])

useEffect(()=>{
    setTimeout(() => {
        fetch('https://jsonplaceholder.typicode.com/posts').then((res)=>res.json())
        .then((Response)=>{
            console.log(Response);
            setdata(Response)
        }).catch((ErrorHndl)=>{
            console.log(ErrorHndl);
        })
    }, 2000);
})

    return (
        <div>
            <div className="container">
                <div className="row mt-5">
                    <div className="col">
                        {loader}
                        {Object.entries(data).map((item,i)=>{
                            return<li key={i}> {item[1].body}</li>
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UseEffect_fetch;