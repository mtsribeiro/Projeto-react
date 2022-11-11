import { useState } from 'react';
import './App.css';

import Condicional from './components/Condicional';
import DetalhesCar from './components/DetalhesCar';
import ListaDados from './components/ListaDados';
import ManageData from './components/ManageData';
import MostraUsuario from './components/MostraUsuario';
import Fragments from './components/Fragments';
import Container from './components/Container';
import Function from './components/Function';
import Menssage from './components/Menssage';
import TrocaMessage from './components/TrocaMessage';
import ListaPersons from './components/ListaPersons'

function App() {

  function ExibiMensagem(){
    console.log('Teste funcao')
  }

  const [message , setMessage] = useState('');

  const trocaMessage = (msg) => {
    setMessage(msg);
  }


  const cars = [
    {id: 1, marca: 'Volvo', modelo: 'v40', km: 40000, novo: false},
    {id: 2, marca: 'Ferrari', modelo: '321', km: 0, novo: true},
    {id: 3, marca: 'audi', modelo: 'a3', km: 40000, novo: false},
    {id: 4, marca: 'Pegout', modelo: '208', km: 62321, novo: false}
  ]

  const persons = [
    {id: 1, nome: 'Mateus', idade: 23, profissao: 'ti'},
    {id: 2, nome: 'Petryck', idade: 28, profissao: 'ti'},
    {id: 3, nome: 'Byanca', idade: 25, profissao: 'mkt'},
    {id: 4, nome: 'Bruna', idade: 29, profissao: 'rh'},
    {id: 5, nome: 'Guilherme', idade: 15, profissao: 'menor aprendiz'}
  ]

  const [UserNome] = useState('Petryck')
  return (
    <div className="App">
      <header className="App-header">
        <h2>Avançado</h2>
        <ManageData />
        <ListaDados />
        <Condicional />
        <MostraUsuario name={UserNome}/>
        {cars.map((car) => (
          <DetalhesCar key={car.id} marca={car.marca} modelo={car.modelo} km={car.km} novo={car.novo}/>
        ))}

        <Fragments />

        <Container>
          <p>Imprimindo da app.js</p>
        </Container>

        <Function myFunction={ExibiMensagem}/>

        <Menssage message={message}/>
        <TrocaMessage trocaMessage={trocaMessage}/>

        {persons.map((person) => (
          <ListaPersons key={person.id} nome={person.nome} idade={person.idade} profissao={person.profissao} />
        ))}

      </header>
    </div>
  );
}

export default App;
