import React from 'react'

const Phrase = ({ quoteRandom }) => {


  return (
    <p className='App_quote'>{quoteRandom.phrase}</p>
  )
}

export default Phrase