import React, { Component } from 'react'
import { compose, partial } from "ramda"
import './App.css'
import { getProducts } from "./service"
import ProductList from "./Product/ProductList/"
import Cart from "./Cart/"

const getProduct = (id, products) => products.find(product => product.id === id)
const updatedCart = (items, product) => items.concat(product)

class App extends Component {
  state = {
    products: [],
    cartItems: [],
    menu: ["productList", "cart"],
    currentView: "productList"
  }
  componentDidMount() {
    getProducts()
    .subscribe(products => {
        this.setState({ products })
    })
  }
  addToCart = (id) => {
    const { cartItems, products } = this.state
    this.setState({
      cartItems: compose(
        partial(updatedCart, [cartItems]),
        partial(getProduct, [id])
      )(products)
    })
  }
  render() {
    const { products, cartItems, menu, currentView } = this.state
    const { addToCart } = this
    return (
      <div className="App">
        <header className="App-header">
         {menu.map(item => <div key={item} onClick={() => this.setState({ currentView: item })}>{item}</div>)}
        </header>
        {currentView === "productList" ? <ProductList addToCart={addToCart} products={products} /> : <Cart cartItems={cartItems} />}
      </div>
    )
  }
}

export default App