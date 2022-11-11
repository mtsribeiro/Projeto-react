const TrocaMessage = ({trocaMessage}) => {
    const msg = ["Mateus", 'Petryck', 'Byanca', 'Bruna']

  return (
    <div>
        <button onClick={() => trocaMessage(msg[0])}>0</button>
        <button onClick={() => trocaMessage(msg[1])}>1</button>
        <button onClick={() => trocaMessage(msg[2])}>2</button>
        <button onClick={() => trocaMessage(msg[3])}>3</button>
    </div>
  )
}

export default TrocaMessage