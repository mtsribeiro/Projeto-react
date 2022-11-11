/*CSS*/
import './App.css';

/*REACT*/
import { useCallBack, useEffect, useState } from 'react'

/*DATA*/
import {wordsList} from './data/words'

/*COMPONENTS*/
import StartScreen from './components/StartScreen';
import GameOver from './components/GameOver';
import Game from './components/Game';

const stage = [
  {id: 1, name: 'start'},
  {id: 2, name: 'game'},
  {id: 3, name: 'end'}
]



function App() {

  const [gameStage, setGameStage] = useState(stage[0].name)
  const [words] = useState(wordsList)
  const [pickedWord, setPickedWord] = useState()
  const [pickedCategory, setPickedCategory] = useState()
  const [letters, setLetters] = useState([])

  const [guessedLetters, setGuessedLetters] = useState([])
  const [wrongLetters, setWrongLetters] = useState([])
  const [guesses, setGuesses] = useState(3)
  const [score, setScore] = useState(0)

  const pickedWordAndCategory = () => {
    //Pega categoria aleatória
    const categories = Object.keys(words)
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)]

    //Pega palavra aleatória
    const word = words[category][Math.floor(Math.random() * words[category].length)]

    return {word, category}
  }

  const StartGame = () => {
    const {word, category} = pickedWordAndCategory()
    
    //Transforma em letras as palavras
    let wordLetters = word.split('')
    wordLetters = wordLetters.map((l) => l.toLowerCase())

    //Fixa estados
    setPickedCategory(category)
    setPickedWord(pickedWord)
    setLetters(wordLetters)

    //Começa o jogo
    setGameStage(stage[1].name)
  }

  const VerifyGame = (letter) => {
    const normalizedLetter = letter.toLowerCase()

    //verifica se a letra foi usada
    if (guessedLetters.includes(normalizedLetter) || wrongLetters.includes(normalizedLetter)) {
      return
    }

    if (letters.includes(normalizedLetter)) {
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters, normalizedLetter
      ])
    } else {
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters, normalizedLetter
      ])

      setGuesses((actualGuesses) => actualGuesses - 1)
    }
  }

  const clearLetterStates = () => {
    setGuessedLetters([])
    setWrongLetters([])
  } 

  useEffect(() => {
    if(guesses <= 0) {

      clearLetterStates()
      setGameStage(stage[2].name)
    }
  }, [guesses])

  const retry = () => {
    setScore(0)
    setGuesses(3)
    setGameStage(stage[0].name)
  }

  return (
    <div className="App">
      {gameStage === 'start' && <StartScreen StartGame={StartGame} />}
      {gameStage === 'game' && <Game VerifyGame={VerifyGame} pickedWord={pickedWord} pickedCategory={pickedCategory} letters={letters} guessedLetters={guessedLetters} wrongLetters={wrongLetters} guesses={guesses} score={score}/>}
      {gameStage === 'end' && <GameOver retry={retry} score={score} />}
    </div>
  );
}

export default App;