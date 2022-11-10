import { useState } from "react"

const Condicional = () => {

  const [name, setName] = useState('Mateus')
  return (
    <div>
        {name === 'Mateus' ? (<p>Nome é Mateus</p>) : (<p>Nome é Petryck</p>)}
        <button onClick={() => setName('Petrick')}>Altera para Petrick</button>
    </div>
  )
}

export default Condicional