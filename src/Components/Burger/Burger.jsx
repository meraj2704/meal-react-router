import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Burg from '../Burg/Burg';

const Burger = () => {
    const burgers = useLoaderData();
    console.log(burgers);
    return (
        <div>
            {
                burgers.map(burger => {
                    <Burg
                    key={burger.id}
                    ></Burg>
                })
            }
        </div>
    );
};

export default Burger;<h1>Burger</h1>