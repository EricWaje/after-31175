import React from 'react';
import style from './ItemListContainer.module.css';

const ItemListContainer = ({ edad, nombre }) => {
    return (
        <div className={style.prueba}>
            <h3>Mi edad es: {edad}</h3>
            <h3>Mi nombre es: {nombre}</h3>
        </div>
    );
};

export default ItemListContainer;
