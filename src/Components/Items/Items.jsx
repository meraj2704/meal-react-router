import React from 'react';
import { Link } from 'react-router-dom';

const Items = () => {
    return (
        <div>
            <li className='list-none'>
                <Link to='./regular'>Regular</Link>
            </li>
            <li className='list-none'>
                <Link to='/burger'>Burger</Link>
            </li>
            <li className='list-none'>
                <Link to='/pizza'>Pizza</Link>
            </li>
            <li className='list-none'>
                <Link></Link>
            </li>

        </div>
    );
};

export default Items;