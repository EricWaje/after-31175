import Navbar from './components/Navbar/Navbar';
import Counter from './components/Counter/Counter';
import ItemListContai from './components/ItemListContai';
import ItemListContainer from './components/ItemListContainer';
//import img desde src
//import nombreQueYoQuiera from './logo.svg';

//import desde public directamente se escribe la ruta como si ya estuvieramos parados en public

const App = () => {
    return (
        <>
            <Navbar />
            <ItemListContainer saludo="Bienvenidos" nombre="Eric" edad={27} />
            <ItemListContai saludo="Bienvenidos" nombre="Eric" edad={27} />
            <Counter />
            {/* <img src={nombreQueYoQuiera} alt="" /> */}
            {/* <img src="img/logo192.png" alt="" /> */}
        </>
    );
};

export default App;
