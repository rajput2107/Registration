import React from 'react';
import ReactDom from 'react-dom';
import Signup from './signup';



class App extends React.Component{
    render(){
        return(
            <Signup></Signup>
        );

    };
};











ReactDom.render(<App />,document.querySelector('#root'));