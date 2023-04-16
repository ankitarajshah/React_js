import React, { Component } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

class ButtonClick extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row mt-5">
                        <div className="col">
                            {/* <button className='btn btn-primary' onClick={()=>{console.log("btn called");
                        Navigate('/API');
                        }}>Click me</button> */}

                        <button className='btn btn-primary' onClick={()=>{console.log("btn called");
                        console.log(this.props);
                        }}>Click me</button>


                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ButtonClick;
function MyClick() {
    let navigate = useNavigate();
    return<>
    <ButtonClick navigateData={navigate}></ButtonClick>
    </>
    
}