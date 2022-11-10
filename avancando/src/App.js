import { useState } from 'react';
import './App.css';

import Condicional from './components/Condicional';
import DetalhesCar from './components/DetalhesCar';
import ListaDados from './components/ListaDados';
import ManageData from './components/ManageData';
import MostraUsuario from './components/MostraUsuario';

function App() {

  const [UserNome] = useState('Petryck')
  return (
    <div className="App">
      <header className="App-header">
        <h2>Avançado</h2>
        <ManageData />
        <ListaDados />
        <Condicional />
        <MostraUsuario name={UserNome}/>

        <DetalhesCar marca="Volvo" modelo="v40" km={21000}/>
      </header>
    </div>
  );
}

export default App;
