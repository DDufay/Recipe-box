import React from 'react';
import PropTypes from 'prop-types'

class Connexion extends React.Component {

    goToApp = event => {
        event.preventDefault();
        const pseudo = this.boxInput.value;
        this.props.history.push(`/box/${pseudo}`);
    };

    render() {
        return (
            <div className="connexionBox">
                <form className="connexion" onSubmit={(e) => this.goToApp(e)}>
                    <h1>Ma Boîte à Recettes</h1>
                    <input type="text" placeholder="Nom du Chef" pattern="[A-Za-z-]{1,}" required ref={(input) => {
                        this.boxInput = input
                    }}/>
                    <button type="submit">GO</button>
                    <p>Pas de caractères spéciaux.</p>
                </form>
            </div>
        )
    }

    static contextTypes = {
        router: PropTypes.object
    };
}

export default Connexion;
