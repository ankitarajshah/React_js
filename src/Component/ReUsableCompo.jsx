import React, { Component } from 'react';

class ReUsableCompo extends Component {
    render() {
        return (
            <div>
                <div className='card'>
                    <img src={this.props.ImgSrc} alt="Nike" />
                    <div className='card-body'>
                        <div className='row'>
                            <div className="col-6">
                                <h4>{this.props.title}</h4>
                            </div>
                            <div className="col-6">
                                <p>Old Price : <del>${this.props.oldPrice}</del></p>
                                <p>New Price : ${this.props.NewPrice}</p>
                            </div>
                            <button className='btn btn-primary'>Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ReUsableCompo;