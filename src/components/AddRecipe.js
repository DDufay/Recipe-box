import React from 'react'
import PropTypes from 'prop-types'

class AddRecipe extends React.Component {

    createRecipe = event => {
        event.preventDefault();
        const recipe = {
            nom: this.nom.value,
            image: this.image.value,
            ingredients: this.ingredients.value,
            instructions: this.instructions.value
        };
        this.props.addRecipe(recipe);
        this.recipeForm.reset();
    };

    render() {
        return (
            <div className="card">
                <form className="admin-form ajouter-recette" ref={input => this.recipeForm = input} onSubmit={e => this.createRecipe(e)}>
                    <input ref={input => this.nom = input} type="text" placeholder="Nom de la recette"/>
                    <input ref={input => this.image = input} type="text" placeholder="Adresse de l'image"/>
                    <textarea ref={input => this.ingredients = input} placeholder="Liste des ingrédients séparés par une virgule" rows="3">
                    </textarea>
                    <textarea ref={input => this.instructions = input} placeholder="Liste des instructions" rows="15">
                    </textarea>
                    <button type="submit">Ajouter une recette</button>
                </form>
            </div>
        )
    }

    static propTypes = {
        addRecipe: PropTypes.func.isRequired
    };
}

export default AddRecipe;
