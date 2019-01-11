import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Clock from './Clock';
import NameForm from './NameForm'
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<Clock />, document.getElementById('root'));
function MiniComponents(props){
    return(
        <div>
            <Clock/>
            <NameForm/>
        </div>
    );
}

// ReactDOM.render(<NameForm />, document.getElementById('root'));
ReactDOM.render(<MiniComponents />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
