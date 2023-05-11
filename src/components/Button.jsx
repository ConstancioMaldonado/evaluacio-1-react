import getRandomArray from "../utils/getRandomArray"
import quotes from '../utils/phrase.json' 

const Button = ({  setQuoteRandom, setNumberImg }) => {

  const handleChangeQuote = () => {
    const newQuote = getRandomArray(quotes)
    setQuoteRandom(newQuote)
    setNumberImg(getRandomArray([1, 2, 3, 4]))
  }

  return (
    <button className="App_btn" onClick={handleChangeQuote}>Probar Mi Suerte</button>
  )
}

export default Button