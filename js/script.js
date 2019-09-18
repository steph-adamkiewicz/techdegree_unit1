/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing

//returns a random quote object from the quotes array
function getRandomQuote () {
  let numOfQuotes = quotes.length
  let rando = Math.floor(Math.random() * numOfQuotes)
  return quotes[rando]
}

//formats the quote and outputs to the webpage
function printQuote () {
  let quote = getRandomQuote ()

  //build html
  let html = ''
  html += '<p class="quote">' + quote.quote + '</p>'
  html += '<p class="source">' + quote.source 
  if (quote.citation) {
    html += '<span class="citation">' + quote.citation + '</span>'
  }
  if (quote.year) {
    html += '<span class="year">' + quote.year + '</span>'
  }
  html += '</p>'
  
  //output to quote-box element
  let outputDiv = document.getElementById('quote-box')
  outputDiv.innerHTML = html
}

//event listener on the "show another quote" button to generate a new random quote
printQuote()
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

