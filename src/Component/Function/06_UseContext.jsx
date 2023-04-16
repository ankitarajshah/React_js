import React, { useContext } from 'react';
import styled from 'styled-components';

const Themes ={
    light:{
        foreground:'aqua',
        background:'grey'
    },

    dark:{
        foreground:'blue',
        background:'yellow'

    }
}

const Name = styled.h1`
font-size: 1.5em;
text-align: center;
color: red;
background:yellow
`;

const themecontext = React.createContext(Themes.dark)
function UseContext(props) { 
    const theme =useContext(themecontext)
    return (
        <div>
            <div className="container">
                <div className="row mt-5">
                    <div className="col">
                        <button style={{background:theme.background,color:theme.foreground}}>Im styled by context</button>
                        <Name>Welcome to Style components</Name>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default UseContext;