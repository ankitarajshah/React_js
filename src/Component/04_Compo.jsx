import React, { Component } from 'react';

class Compo extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-3 ">

                            <div className='card'>
                                <img src="images/Nike.jpg" alt="Nike" />

                                <div className="card-body">
                                    <div className="row">
                                        <div className="col">
                                            <h4>Nike Shoe</h4>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <p>Old Price: <del>$9000</del></p>
                                        <p>New Price: $4500</p>
                                    </div>
                                    <button className='btn btn-primary'>Buy Now</button>
                                </div>
                            </div>
                        </div>

                        <div className="col-3 ">

                            <div className='card'>
                                <img src="images/adidas.jpg" alt="Nike" />

                                <div className="card-body">
                                    <div className="row">
                                        <div className="col">
                                            <h4>Adidas Shoe</h4>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <p>Old Price: <del>$8000</del></p>
                                        <p>New Price: $4000</p>
                                    </div>
                                    <button className='btn btn-primary'>Buy Now</button>
                                </div>
                            </div>
                        </div>

                        <div className="col-3 ">

                            <div className='card'>
                                <img src="images/sketchers.jpg" alt="Nike" />

                                <div className="card-body">
                                    <div className="row">
                                        <div className="col">
                                            <h4>Sketchers Shoe</h4>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <p>Old Price: <del>$9000</del></p>
                                        <p>New Price: $4500</p>
                                    </div>
                                    <button className='btn btn-primary'>Buy Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-3 ">

                            <div className='card'>
                                <img src="images/puma.jpg" alt="Nike" />

                                <div className="card-body">
                                    <div className="row">
                                        <div className="col">
                                            <h4>Puma Shoe</h4>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <p>Old Price: <del>$9000</del></p>
                                        <p>New Price: $4500</p>
                                    </div>
                                    <button className='btn btn-primary'>Buy Now</button>
                                </div>
                            </div>
                        </div>




                    </div>
                </div>
            </div>
        );

    }
}

export default Compo;