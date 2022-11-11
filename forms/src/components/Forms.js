import './Forms.css'
import { useState } from 'react'

const Forms = () => {

  const [name, setName]  = useState();

  const alteraNome = (e) => {
    setName(e.target.value)
  }

  const enviaForm = (e) => {
    e.preventDefault()
    console.log(name);
  }

  return (
    <div>
        <form onSubmit={enviaForm}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input type="text" name='name' placeholder='Digite seu nome' onChange={alteraNome} />
            </div>
            <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}

export default Forms