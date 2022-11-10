import { useState } from 'react'

const ListaDados = () => {

  const deletaRandom =() => {
    const randomNumber = Math.floor(Math.random() * 4)
    setUsers((prevUsers) => {
        console.log(prevUsers);
        return prevUsers.filter((list) => randomNumber !== list.id)
    })
  }

  const [list, setUsers] = useState([
    {id: 1,
    name: "Mateus",
    age: 23},

    {id: 2,
    name: "Petryck",
    age: 28},

    {id: 3,
    name: "Byanca",
    age: 25},
    ])

  return (
    <div>
        <ul>
            {list.map((item ,i) => (
                <li key={item.id}>{item.name} - {item.age} anos</li>
            ))}
        </ul>
        <button onClick={deletaRandom}>deleta usuario</button>
    </div>
  )
}

export default ListaDados