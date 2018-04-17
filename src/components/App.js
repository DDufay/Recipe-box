import React from 'react'
import PropTypes from 'prop-types'
import Header from './Header'
import Admin from './Admin'
import recettes from '../recettes'
import Card from "./Card";
import { base } from '../base'

class App extends React.Component {

    state = {
        recettes: {}
    };

    loadRecipes = () => {
        this.setState({recettes});
    };

    componentWillMount() {
        this.ref = base.syncState(`${this.props.match.params.pseudo}/recettes`, {
            context: this,
            state: 'recettes'
        });
    }

    componentWillUnmount() {
        base.removeBinding(this.ref);
    }

    render() {
        const cards = Object
            .keys(this.state.recettes)
            .map(key => <Card key={key} details={this.state.recettes[key]}/>);

        return (
            <div className="box">
                <Header pseudo={this.props.match.params.pseudo}/>
                <div className="cards">
                    {cards}
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
