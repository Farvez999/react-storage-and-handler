import React from 'react';
import { add } from '../../utilities/calculate';

const Shoes = () => {
    const first = 55;
    const second = 66;
    const sum = add(first, second);
    return (
        <div>
            <h1>Welcome my shoes Compo</h1>
            <p>Sum: {sum}</p>
        </div>
    );
};

export default Shoes;