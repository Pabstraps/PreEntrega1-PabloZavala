import './App.css';
import NavBar from '../src/components/navBar/navBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <div className="App">
     <NavBar/>
     <ItemListContainer greeting = "Bienvenido!"/>
    </div>
  );
}

export default App;
