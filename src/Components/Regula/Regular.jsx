import React from 'react';
import { useLoaderData } from 'react-router-dom';
import RegularFood from '../RegularFood/RegularFood';

const Regular = () => {
    const regularItems = useLoaderData();
    console.log(regularItems);
    return (
        <div>
            {/* {
                regularItems.map(regular =>{
                    <RegularFood
                    key={regular.id}
                    regularItems={regularItems}
                    ></RegularFood>
                })
            } */}
        </div>
    );
};

export default Regular;