import './ListaCars.css'

const ListaCars = ({carro, modelo, km}) => {
  return (
    <div className="form-cars">
        <h3 className="title-cars">{carro}</h3>
        <ul className="details-cars">
            <li>{modelo}</li>
            <li>{km}</li>
        </ul>
    </div>
  )
}

export default ListaCars