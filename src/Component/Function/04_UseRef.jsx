import React, { useRef } from 'react';

function UseRef(props) {

    const input = useRef(null)

    const Btnclick=()=>{
        console.log("Button called");
        input.current.focus();
        if(input.current.value =="")
        {
            alert("Plaese enter the data")
        }
    }

    return (
        <div>
            <div className="container">
                <div className="row mt-5">
                    <div className="col">
                        <input type="text" className='form-control' ref={input}/>
                        <button className='btn btn-primary' onClick={Btnclick}>Click Me</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UseRef;