import React, { Component } from 'react';

class loops extends Component {

    render() {
        const Data =['Hello','1','2','3','Demo']
        console.log(Data)

        //for with Array
        for(let i=0;i<Data.length;i++)
        {
            const element = Data[i]
            console.log(element);
        }

       // for in
       for (const mydata in Data) {
        if (Data.hasOwnProperty.call(Data, mydata)) {
            const element = Data[mydata];
            console.log(element)            
        }

        //console.log(Data[mydata]);
       }

      // for of
       for (const Demodata of Data) {
        console.log(Demodata)
       }

       //for each
       Data.forEach(element => {
        console.log(element+"foreach called")       
       });

       //map
       const mapdata = Data.map((res,i)=>
       {
        return <h1 key={i}>{res}</h1>
       })
       
        return (
          <div>
            <div className="container">
                <div className="row" mt-5>
                    <div className="col">
                        {mapdata}
                    </div>
                </div>
            </div>
          </div>

        );
    }
}

export default loops;