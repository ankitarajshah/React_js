import React, { useReducer } from 'react';

const InitData = {count:0}

function Reducer(state, action){
    switch (action.type){
        case 'Increment':
            return {count:state.count+1}
        case 'Decrement':
            return {count:state.count-1}
        case 'Reset':
            return {count:0}
        default:
                return state;
    }
}

function UseReducer(props) {
    const [state, dispatch] = useReducer(Reducer,InitData)
    return (
        <div>
            <div className="container">
                <div className="row mt-5">
                    <div className="col">
                        <button className='btn btn-primary m-2'onClick={()=>dispatch({type:'Decrement'})}>Decrement</button>
                        <h2>{state.count}</h2>
                        <button className='btn btn-primary m-2'onClick={()=>dispatch({type:'Increment'})}>Increment</button>
                        <button className='btn btn-danger'onClick={()=>dispatch({type:'Reset'})}>Reset</button>                
                    </div>
                </div>       
            </div>
        </div>
    );
}

export default UseReducer;