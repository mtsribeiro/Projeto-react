import './StartScreen.css'

const StartScreen = ({startGame}) => {
  return (
    <div className="start">
        <h1>Secret Word</h1>
        <p>Clique no botão para iniciar o game!</p>
        <button onClick={startGame}>Começar</button>
    </div>
  )
}

export default StartScreen