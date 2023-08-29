import React from 'react';
import { Link } from 'react-router-dom';

const Items = () => {
    return (
        <div className='flex flex-col items-center pt-5 text-2xl font-bold text-yellow-500'>
            <li className='list-none pb-4  hover:text-yellow-300'>
                <Link to='regular'>Regular</Link>
            </li>
            <li className='list-none pb-4  hover:text-yellow-300'>
                <Link to='burger'>Burger</Link>
            </li>
            <li className='list-none pb-4  hover:text-yellow-300'>
                <Link to='pizza'>Pizza</Link>
            </li>
            <li className='list-none'>
                <Link></Link>
            </li>

        </div>
    );
};

export default Items;