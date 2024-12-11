const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');
const button = document.getElementById('generate-quote');

// my API key
const apiKey = "KEoyHa1iDw9SnPmgepYnwd27VlZikT2NC0hW9s067a2011a2";

// Function to fetch a random quote
function fetchQuote() {
    fetch('https://quotes.rest/qod', {
        headers: {
            'Authorization': `Bearer ${apiKey}`
        }
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const quote = data.contents.quotes[0].quote;
            const author = data.contents.quotes[0].author;

            quoteElement.textContent = `"${quote}"`;
            authorElement.textContent = `- ${author}`;
        })
        .catch(error => {
            console.error('Error fetching quote:', error);
            quoteElement.textContent = "Unable to fetch quote. Please try again.";
            authorElement.textContent = "";
        });
}

// Add event listener for the button
button.addEventListener('click', fetchQuote);

// Fetch a quote when the page loads
fetchQuote();