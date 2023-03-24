import React from "react"
import "./QuoteBox.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'

export const QuoteBox = (props) => {
  return (
    <div id="quote-box" style={{ color: props.color }}>
      <div id="quote-area">
        <h1 id="text"><FontAwesomeIcon icon={faQuoteLeft} /> {props.quote}</h1>
      </div>
      <div id="author-area">
        <h4 id="author">{'- ' + props.author}</h4>
      </div>
      <div className={"buttons"}>
        <a className={"button"} id={"tweet-quote"} href="twitter.com/intent/tweet" style={{ background: props.color }} target="_blank">Tweet</a>
        <span className={"button"} id={"new-quote"} onClick={props.fetchQuote} style={{ background: props.color }}>New Quote</span>
      </div>

    </div>
  )
}