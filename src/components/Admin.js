import React from 'react'
import PropTypes from 'prop-types'

class Admin extends React.Component {

    render() {
        return (
            <div className="cards">
            <footer>
            <button onClick={this.props.loadRecipes}>Remplir</button>
            </footer>
            </div>
        )
    }

    static propTypes = {
        loadRecipes: PropTypes.func.isRequired
    }
}

export default Admin;
