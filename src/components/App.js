import React from 'react'
import PropTypes from 'prop-types'
import Header from './Header'
import Admin from './Admin'
import recipes from '../recettes'
import Card from "./Card";
import {base} from '../base'

class App extends React.Component {

    state = {
        recipes: {}
    };

    loadRecipes = () => {
        this.setState({recipes});
    };

    componentWillMount() {
        this.ref = base.syncState(`${this.props.match.params.pseudo}/recettes`, {
            context: this,
            state: 'recipes'
        });
    }

    componentWillUnmount() {
        base.removeBinding(this.ref);
    }

    addRecipe = recipe => {
        const recipes = {...this.state.recipes};
        const timestamp = Date.now();
        recipes[`recette-${timestamp}`] = recipe;
        this.setState({recipes});
    };

    editRecipe = (key, editRecipe) => {
        const recipes = {...this.state.recipes};
        recipes[key] = editRecipe;
        this.setState({recipes});
    };

    deleteRecipe = key => {
        const recipes = {...this.state.recipes};
        recipes[key] = null;
        this.setState({recipes});
    };

    render() {
        const cards = Object
            .keys(this.state.recipes)
            .map(key => <Card key={key} details={this.state.recipes[key]}/>);

        return (
            <div className="box">
                <Header pseudo={this.props.match.params.pseudo}/>
                <div className="cards">
                    {cards}
                </div>
                <Admin
                    recipes={this.state.recipes}
                    loadRecipes={this.loadRecipes}
                    addRecipe={this.addRecipe}
                    editRecipe={this.editRecipe}
                    deleteRecipe={this.deleteRecipe}
                />
            </div>
        )
    }

    static propTypes = {
        match: PropTypes.object.isRequired
    };
}

export default App;
