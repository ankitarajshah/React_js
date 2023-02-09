import React, { Component } from 'react';

class State extends Component {
 constructor()
 {
    super();
    this.state={name:'Ankita', age:0}
    this.state={movie:'Three States', author:'chetan bhagat'}
 }
Btnclick=()=>{
    console.log('btn called');
    this.setState({name:"Nikita",age:30})
}
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row mt-5" >
                        <div className="col">
                            <h1>{this.state.name}</h1>
                            <h2>{this.state.age}</h2>
                            <button className='btn btn-primary' onClick={this.Btnclick}>Click me</button>

                            <br />
                            <h1>Movie name:{this.state.movie}</h1>
                            <h2>Author name:{this.state.author}</h2>
                            <button className='btn btn-success' onClick={()=>{this.setState({movie:'Two States',author:'Chetan patel'})}} >click </button>
                            

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default State;