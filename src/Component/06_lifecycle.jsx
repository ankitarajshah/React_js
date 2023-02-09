//rcfc

import React, { Component, PropTypes } from 'react';

class Lifecycle extends Component {
    constructor(props) {
        super(props);
        console.log("Constructor called")
        this.state ={counter:0}
    }

    // componentWillMount() {
    //     console.log("componentWillMount called")
    // }

    componentDidMount() {
        
        setTimeout(()=>{
            console.log('componentDidMount called')
        },2000)
    }

    // componentWillReceiveProps(nextProps) {
    //     console.log('componentDidMount called')
    // }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("componentDidMount called")
        console.log("nextProps called",nextProps)
        console.log("nextState called ",nextState)
        return true;

    }

    // componentWillUpdate(nextProps, nextState) {
    //     console.log('componentWillUpdate called')
    // }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate called')
        console.log("prevProps called",prevProps)
        console.log("prevState",prevState)
    }

    componentWillUnmount() {
        console.log("componentWillUnmount")
    }
    Btnclick=()=>{
        console.log("button called")
        this.setState({counter:this.state.counter+1})
    }
    Btnclck=()=>{
        console.log("button called")
        this.setState({counter:this.state.counter-1})
    }
    Bttnclck=()=>{
        console.log("button called")
        this.setState({counter:0})
    }

    render() {
       // console.log('render called')
        return (
            <div>
                <div className='container'>
                    <div className="row mt-5">
                        <div className="col">
                            <h1>{this.state.counter}</h1><br></br>
                            <input value={this.state.counter} type="text"/>
                            <button className='btn btn-primary me-3' onClick={this.Btnclick}>click me +</button>
                            <button className='btn btn-primary me-3' onClick={this.Btnclck}>click me -</button>
                            <button className='btn btn-primary' onClick={this.Bttnclck}>reset</button>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}


export default Lifecycle;