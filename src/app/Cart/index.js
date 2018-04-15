import React, { Component, Fragment } from "react"
import Search from "./Search"

class Cart extends Component {
    render() {
        const { cartItems, term, handleInput, searchResults } = this.props
        return (
            <Fragment>
            <Search {...{ term, handleInput }} />
            <div>{searchResults.map(({ name }) => <div>{name}</div>)}</div>
            <div>
                {cartItems.map(product => <div key={product.id}>{product.name}</div>)}
            </div>
            </Fragment>
        )
    }
}

export default Cart