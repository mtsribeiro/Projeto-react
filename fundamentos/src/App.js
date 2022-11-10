/*COMPONENTE*/
import Challenge from './components/Challenge';
import PrimeiroComponente from './components/PrimeiroComponente';

/*CSS*/
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PrimeiroComponente />
        <Challenge />
      </header>
    </div>
  );
}

export default App;
