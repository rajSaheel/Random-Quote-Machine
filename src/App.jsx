import { useEffect, useState } from 'react'
import './App.css'
import { QuoteBox } from './components/QuoteBox/QuoteBox.jsx'

import axios from "axios"

export default function App() {
  const [quote, setQuote] = useState("")
  const [themeColor, setThemeColor] = useState("fff")

  const setTheme = () => {
    const themes = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"]
    const random = Math.floor(Math.random() * themes.length)
    return themes[random]
  }

  const getQuote = async () => {
    const url = 'https://api.api-ninjas.com/v1/quotes?category='
    try {
      const response = await axios.get(url, { headers: { 'X-Api-Key': 'fPcr7lc76r4UhtzJp8LqhQ==3UbWVyHN3Hl8zoK9' }, })
      const quote = response.data[0]
      console.log(response)
      setQuote(quote)
      setThemeColor(setTheme())
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    getQuote()
  }, [])

  return (
    <main style={{ background: themeColor }}>
      {/*       {!quote && <h1>Loading...</h1>}
      <QuoteBox quote={quote["quote"]} author={quote["author"]} fetchQuote={getQuote} color={themeColor} /> */}

      {
        (typeof (quote.quote) == "string") ? (<QuoteBox quote={quote["quote"]} author={quote["author"]} fetchQuote={getQuote} color={themeColor} />)
          : (<h1>Loading...</h1>)
      }
    </main>
  )
}

