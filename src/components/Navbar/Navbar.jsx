import React from 'react';
import CartWidget from './CartWidget';

const Navbar = () => {
    return (
        <nav>
            <img src="img/logo192.png" alt="logo" />
            <div>
                <ul>
                    <li>Home</li>
                    <li>Remeras</li>
                    <li>Camisas</li>
                    <li>Gorras</li>
                </ul>
                <CartWidget />
            </div>
        </nav>
    );
};

export default Navbar;
