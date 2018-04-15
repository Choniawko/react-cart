import React, { Component } from 'react'
import ProductItem from "../ProductItem/"

class ProductList extends Component {
    render() {
        const { products, addToCart } = this.props
        return (
            <div>
                {products.map(product => <ProductItem addToCart={addToCart} product={product} key={product.id} />)}
            </div>
        )
    }
}

export default ProductList