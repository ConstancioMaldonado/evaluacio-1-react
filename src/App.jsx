import './App.css'
import Button from './components/Button'
import Phrase from './components/Phrase'
import quotes from './utils/phrase.json'
import getRandomArray from './utils/getRandomArray'
import { useState } from 'react'

const imgs = [1, 2, 3, 4]

function App() {
  
 // const getRandomArray = (arr) => {
   // const indexRandom = Math.floor(Math.random() *arr.length)
   // return arr[indexRandom]
  //}

  const [quoteRandom, setQuoteRandom] = useState(getRandomArray(quotes))
  const [numberImg, setNumberImg] = useState(getRandomArray(imgs))


    const appStyle = {
      backgroundImage: `url('/backgrounds/fondo${numberImg}.jpg')`
    }

  return (
    <div style={appStyle} className="App">
     <h1 className='App_title'>GALLETAS DE LA  FORTUNA</h1>
     <Button 
     setQuoteRandom={setQuoteRandom} 
     setNumberImg={setNumberImg} 
     />
     <Phrase quoteRandom={quoteRandom}/>
    
    </div>
  )
}

export default App
