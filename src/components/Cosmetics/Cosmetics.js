import React from 'react';
import { add, multiply } from '../../utilities/calculate';

const Cosmetics = () => {
    const first = 55;
    const second = 66;
    const total = add(first, second);
    const result = multiply(first, second);
    return (
        <div>
            <h1>Hello Cosmetics World</h1>
            <p>Total : {total} and Result : {result}</p>
        </div>
    );
};

export default Cosmetics;