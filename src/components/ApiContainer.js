import {useState,useEffect} from 'react';
import ApiCard from './ApiCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const ApiContainer = () => {

const[personaje,setPersonaje] = useState([]);


useEffect(()=>{
    const getPersonajes = async()=> {
    const response = await fetch('https://swapi.dev/api/people')
    const datos = await response.json()
    setPersonaje(datos.results)
    
}
    getPersonajes()
},[])


  return (
    <Container fluid>
        <Row>
           {personaje.map (p=> <ApiCard
           key = {p.id}
           altura ={p.height}
           username ={p.name}
           />)}
        </Row>
    </Container>
  )
}

export default ApiContainer
