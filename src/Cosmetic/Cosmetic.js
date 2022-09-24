import React from 'react';

const Cosmetic = (props) => {
    const { name, price } = props.cosmetic;
    return (
        <div>
            <h2>Buy this : {name}</h2>
            <h3>Only for : {price}$</h3>
        </div>
    );
};

export default Cosmetic;