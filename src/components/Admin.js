import React from 'react'
import PropTypes from 'prop-types'
import AddRecipe from "./AddRecipe"

class Admin extends React.Component {
    changeRecipe = (event, key) => {
        const recipe = this.props.recipes[key];
        const editRecipe = {
            ...recipe,
            [event.target.name]: event.target.value
        };
        this.props.editRecipe(key, editRecipe);
    };

    renderAdmin = key => {
        const recipe = this.props.recipes[key];
        return (
            <div className="card" key={key}>
                <form className="admin-form">
                    <input type="text" name="nom" placeholder="Nom de la recette" value={recipe.nom} onChange={e => this.changeRecipe(e, key)}/>
                    <input type="text" name="nom" placeholder="Adresse de l'image" value={recipe.image} onChange={e => this.changeRecipe(e, key)}/>
                    <textarea placeholder="Liste des ingrédients séparés par une virgule" rows="3" value={recipe.ingredients} onChange={e => this.changeRecipe(e, key)}>
                    </textarea>
                    <textarea placeholder="Liste des instructions" rows="15" value={recipe.instructions} onChange={e => this.changeRecipe(e, key)}>
                    </textarea>
                </form>
                <button onClick={() => this.props.deleteRecipe(key)}>Supprimer la recette</button>
            </div>
        )
    };

    render() {
        const adminCards = Object
            .keys(this.props.recipes)
            .map(this.renderAdmin);
        return (
            <div className="cards">
                <AddRecipe addRecipe={this.props.addRecipe}/>
                {adminCards}
                <footer>
                    <button onClick={this.props.loadRecipes}>Remplir</button>
                </footer>
            </div>
        )
    }

    static propTypes = {
        recipes: PropTypes.object.isRequired,
        loadRecipes: PropTypes.func.isRequired,
        addRecipe: PropTypes.func.isRequired,
        editRecipe: PropTypes.func.isRequired,
        deleteRecipe: PropTypes.func.isRequired
    }
}

export default Admin;
