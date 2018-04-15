import React from 'react'
import ReactDOM from 'react-dom'
import './App.css'
import registerServiceWorker from './registerServiceWorker'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './components/App'
import Connexion from "./components/Connexion"

ReactDOM.render((
    <Router>
        <div>
            <Route exact path="/" component={Connexion}/>
            <Route path="/box/:pseudo" component={App}/>
        </div>
    </Router>
), document.getElementById('root'));
registerServiceWorker();
