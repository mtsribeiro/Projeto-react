const Challenge = () => {
  var a = 2
  var b = 6

    const ImprimiNumero = () => {
        console.log('Soma: ', a+b)
    }

    return (
        <div>
            <h1>{a} e {b}</h1>
            <button onClick={ImprimiNumero}>Clique aqui!</button>
        </div>
    )
}

export default Challenge