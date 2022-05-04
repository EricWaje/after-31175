import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const CartWidget = () => {
    return (
        <div>
            <AiOutlineShoppingCart size={40} color="red" />
            <p>4</p>
        </div>
    );
};

export default CartWidget;
