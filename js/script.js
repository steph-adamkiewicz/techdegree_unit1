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
/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number
   - Cse the random number to `return` a random quote object from the `quotes` array.
***/

//formats the quote and outputs to the webpage
function printQuote () {
  let quote = getRandomQuote ()
  console.log(quote)
  let html = '<p class="quote">' + quote.quote + '</p>'
  html += '<p class="source">' + quote.source 
  if (quote.citation) {
    html += '<span class="citation">' + quote.citation + '</span>'
  }

  if (quote.year) {
    html += '<span class="year">' + quote.year + '</span>'
  }
  html += '</p>'
  console.log(html)
  return html

  /*
  <p class="quote">Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.</p>
  <p class="source">Patrick McKenzie<span class="citation">Twitter</span><span class="year">2016</span></p>
  */
}


/***
  Create the `printQuote` function to:
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string.
***/




/***
  When the "Show another quote" button is clicked, the event listener
  below will be triggered, and it will call, or "invoke", the `printQuote`
  function. So do not make any changes to the line of code below this
  comment.
***/
printQuote()
document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.
