import React, { useState,useDebugValue,useEffect} from 'react';

function UseDebugValue(msg,delay) {
    const[message, setmessage]= useState("")

    useEffect(() => {
      setTimeout(()=>{
        setmessage(msg)
      },delay);
      },
    )

    React.useDebugValue(message,data=>
        data?"Message set":"Message not set"
        )
    return message;
}

function App(){
    const delayMessage = UseDebugValue("Ankita",2500)
    return<>
        <div className='container mt-5'>
            <div className='row'>
                <div className='col'>
                    {delayMessage}
                </div>
            </div>

        </div>
    </>
}

export default App;