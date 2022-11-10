import { useState } from "react";

const ManageData = () => {

    const [number , setNumber] = useState(10)

  return (
    <div>
        <h1>{number}</h1>
        <button onClick={() => setNumber(25)}>Altera o valor</button>
    </div>
  )
}

export default ManageData