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
            <Route exact path="/Recipe-box/" component={Connexion}/>
            <Route path="/Recipe-box/box/:pseudo" component={App}/>
        </div>
    </Router>
), document.getElementById('root'));
registerServiceWorker();
