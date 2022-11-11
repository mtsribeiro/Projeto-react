import './App.css';
import ListaCars from './components/ListaCars';

function App() {

  const cars = [
    {id: 0, carro: 'Volvo', modelo: 'v40', km:2000},
    {id: 1, carro: 'Audi', modelo: 'v40', km:1000},
    {id: 2, carro: 'Renault', modelo: 'Sandero', km:10000},
    {id: 3, carro: 'Pegout', modelo: '208', km:5000}
  ]

  return (
    <div className="App">
      {cars.map((car) => (
        <ListaCars key={car.id} carro={car.carro} modelo={car.modelo} km={car.km} />
      ))}
    </div>
  );
}

export default App;
