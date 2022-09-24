import React from 'react';
import './Cosmetic.css'

const Cosmetic = (props) => {
    const { id, name, price } = props.cosmetic;

    const addToCart = (id) => {
        console.log('item added', id)
    }
    return (
        <div className='product'>
            <h2>Buy this : {name}</h2>
            <h3>Only for : {price}$</h3>
            <button onClick={() => addToCart(id)}>Add to cart</button>
        </div>
    );
};

export default Cosmetic;