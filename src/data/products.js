const products = [
    {
        name: 'Remera Negra',
        price: 200,
        stock: 4,
        id: 1,
        img: 'https://res.cloudinary.com/ericwaje/image/upload/v1619372707/remera3_vc9mqa.jpg',
        category: 'remeras',
        discount: 50,
    },
    {
        name: 'Remera Blanca',
        price: 222,
        stock: 10,
        id: 11,
        img: 'https://res.cloudinary.com/ericwaje/image/upload/v1619372707/remera2_pe94nf.jpg',
        category: 'remeras',
        discount: 25,
    },
    {
        name: 'Camisa Azul',
        price: 300,
        stock: 4,
        id: 2,
        img: 'https://res.cloudinary.com/ericwaje/image/upload/v1619372706/camisa3_xyt1ay.jpg',
        category: 'camisas',
        discount: 10,
    },
    {
        name: 'Camisa con Lunares',
        price: 333,
        stock: 4,
        id: 22,
        img: 'https://res.cloudinary.com/ericwaje/image/upload/v1619372706/camisa4_ehruek.jpg',
        category: 'camisas',
        discount: 10,
    },
    {
        name: 'Gorra Azul',
        price: 80,
        stock: 20,
        id: 4,
        img: 'https://res.cloudinary.com/ericwaje/image/upload/v1619372706/gorra1C_r0cz4b.jpg',
        category: 'gorras',
        discount: 15,
    },
    {
        name: 'Gorra Negra',
        price: 88,
        stock: 5,
        id: 44,
        img: 'https://res.cloudinary.com/ericwaje/image/upload/v1619372706/gorra4C_nyvjj6.jpg',
        category: 'gorras',
        discount: 5,
    },
];

const product = {
    name: 'Gorra Negra',
    price: 88,
    stock: 5,
    id: 44,
    img: 'https://res.cloudinary.com/ericwaje/image/upload/v1619372706/gorra4C_nyvjj6.jpg',
    category: 'gorras',
    discount: 5,
};

export const traerProductos = (cat) => {
    return new Promise((resolve, reject) => {
        const productosFiltrados = products.filter(
            (prod) => prod.category === cat
        );
        setTimeout(() => {
            if (cat === undefined) {
                resolve(products);
            } else {
                resolve(productosFiltrados);
            }
        }, 1000);
    });
};

export const traerProducto = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(product);
        }, 1000);
    });
};
