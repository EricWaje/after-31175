import React from 'react';
// utilizando modulos css --> crea un id automatico aleatorio por cada clase
import s from './ItemListContai.module.css';

//sin utilizar modulos de css
// import './nombreDelArchivo.css

const ItemListContai = ({ nombre, edad }) => {
    return (
        <div className={s.prueba}>
            <h3>Mi edad es: {edad}</h3>
            <h3>Mi nombre es: {nombre}</h3>
        </div>
    );
};

export default ItemListContai;
