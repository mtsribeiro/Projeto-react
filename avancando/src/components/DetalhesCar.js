const DetalhesCar = ({marca, modelo, km}) => {

  return (
    <div>
        <h2>Detalhes carro:</h2>
        <ul>
            <li>Marca: {marca}</li>
            <li>Modelo: {modelo}</li>
            <li>KM: {km}</li>
        </ul>
    </div>
  )
}

export default DetalhesCar