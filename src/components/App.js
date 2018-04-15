import React from 'react'
import PropTypes from 'prop-types'
import Header from './Header'
import Admin from './Admin'
import recettes from '../recettes'

class App extends React.Component {

    state = {
        recettes: {}
    };

    loadRecipes = () => {
        this.setState({ recettes });
    };

    render() {
        return (
            <div className="box">
                <Header pseudo={this.props.match.params.pseudo}/>
                <div className="cards">
                    <div className="card"></div>
                </div>
                <Admin loadRecipes={this.loadRecipes} />
            </div>
        )
    }

    static propTypes = {
        match: PropTypes.object.isRequired
    };
}

export default App;
