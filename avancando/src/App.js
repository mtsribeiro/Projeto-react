import './App.css';
import Condicional from './components/Condicional';
import ListaDados from './components/ListaDados';
import ManageData from './components/ManageData';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Avançado</h2>
        <ManageData />
        <ListaDados />
        <Condicional />
      </header>
    </div>
  );
}

export default App;
