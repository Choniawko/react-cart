import React, { Component } from "react"

class Cart extends Component {
    render() {
        const { cartItems } = this.props
        return (
            <div>
                {cartItems.map(product => <div key={product.id}>{product.name}</div>)}
            </div>
        )
    }
}

export default Cart