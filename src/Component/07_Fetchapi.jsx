import React, { Component } from 'react';

class Fetchapi extends Component {
constructor()
{
    super()
    console.log("Constructor called");
    this.state={UserData:'',
                status:"Loading....."}
}
componentDidMount(){
    console.log('ComponentDidMount called')
    setTimeout(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then((Res)=>{
            console.log(Res);
            this.setState({UserData:Res,status:'Completed'})
        }).catch((ErrorHndl)=>{
            console.log(ErrorHndl)
        })
    },3000)
}

    render() {
        console.log('render called')
        return (
            <div>
                <div className="container">
                    <div className="row mt-5">
                        <div className="col">
                            {this.state.status}
                            {/* {this.state.status!=
                                'Completed'?
                                'Loading....':
                                'Will be print'} */}
                            {this.state.status=='Completed'?
                            <div>
                                {JSON.stringify(this.state.UserData)}
                            </div>
                            :'No Data found'}
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Fetchapi;