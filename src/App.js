import './App.css';
import MenuSuperior from '../src/components/navBar/navBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <div className="App">
     <MenuSuperior/>
     <ItemListContainer greeting = "Bienvenido!"/>
    </div>
  );
}

export default App;
