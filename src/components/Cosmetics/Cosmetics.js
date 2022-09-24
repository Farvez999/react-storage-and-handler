import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Cosmetic from '../../Cosmetic/Cosmetic';
import { add, multiply } from '../../utilities/calculate';

const Cosmetics = () => {
    // const first = 55;
    // const second = 66;
    // const total = add(first, second);
    // const result = multiply(first, second);

    //Fake Data one Way

    // const cosmetics = [
    //     { id: 1, name: 'Alta', price: 100 },
    //     { id: 2, name: 'Plaish', price: 200 },
    //     { id: 3, name: 'Malis', price: 300 },
    //     { id: 4, name: 'Nalis', price: 400 },
    //     { id: 5, name: 'Balis', price: 500 }
    // ]

    //Fake Data two Way

    // const cosmetics = [
    //     {
    //         "id": "632e8c203785e28b308f677e",
    //         "price": 34,
    //         "name": "Green Jarvis"
    //     },
    //     {
    //         "id": "632e8c20cef8ba718c5ef441",
    //         "price": 28,
    //         "name": "Georgina Cantrell"
    //     },
    //     {
    //         "id": "632e8c20f3e0da374a0a4105",
    //         "price": 33,
    //         "name": "Castro Miller"
    //     },
    //     {
    //         "id": "632e8c207c47d9b808616d71",
    //         "price": 23,
    //         "name": "Hodge Sykes"
    //     },
    //     {
    //         "id": "632e8c208fd14278b372b285",
    //         "price": 40,
    //         "name": "Dillon Franklin"
    //     },
    //     {
    //         "id": "632e8c2062a472d83cb87b5d",
    //         "price": 37,
    //         "name": "Prince Moses"
    //     },
    //     {
    //         "id": "632e8c20f289e2cb69b0283c",
    //         "price": 22,
    //         "name": "Goodwin Bates"
    //     }
    // ]

    //Fake Data three Way

    const [cosmetics, setCosmetics] = useState([]);

    useEffect(() => {
        fetch('cosmetics.json')
            .then(res => res.json())
            .then(data => setCosmetics(data))
    }, [])

    return (
        <div>
            <h1>Hello Cosmetics World</h1>
            {/* <p>Total : {total} and Result : {result}</p> */}
            {
                cosmetics.map(cosmetic => <Cosmetic
                    key={cosmetic.id}
                    cosmetic={cosmetic}
                ></Cosmetic>)
            }
        </div>
    );
};

export default Cosmetics;