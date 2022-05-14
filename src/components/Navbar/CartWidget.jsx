import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import s from './Navbar.module.css';

const CartWidget = () => {
    return (
        <div className={s.shop}>
            <AiOutlineShoppingCart size={30} color="white" />
            <p>4</p>
        </div>
    );
};

export default CartWidget;
