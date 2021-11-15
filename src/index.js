import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

class Hello extends React.Component{
    render(){
        return (
            <h1 className={'title'}> Hello {this.props.name} </h1>
        )
    }
}

//ReactDOM.render(<Hello name={"World"}/>, document.getElementById('root'))
ReactDOM.render(<App />, document.getElementById('root'));
