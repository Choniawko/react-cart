import React from 'react';

export default ({ product: { id, name, descripton, price, image }, addToCart }) => (
    <div>
        <div>{name}</div>
        <div>{image}</div>
        <div>{price}</div>
        <div>{descripton}</div>
        <button onClick={() => addToCart(id)} type="button">Add to cart</button>
    </div>
)