import './App.css';
import NavBar from '../src/components/navBar/navBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Cartwidget from '../src/components/CartWidget/CartWidget'
import Categorias from './components/Categorias';
import Error from './components/Error';


function App() {
  return (
    <div className="App">

    <BrowserRouter>
    <NavBar/>

    <Routes>
      <Route path="/"element={<home/>}/>
      <Route path="/components/Categorias"element={<Categorias/>}/>
      <Route path="/Carrito"element={<Cartwidget/>}/>
      <Route path="*"element={<Error/>}/>
    </Routes>
     </BrowserRouter>

     <ItemListContainer greeting = "Bienvenido!"/>
    </div>
  );
}

export default App;
