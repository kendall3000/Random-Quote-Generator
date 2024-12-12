const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");

async function fetchQuote() {
    try {
        const response = await fetch('http://localhost:3000/quote');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        // Extract the quote and author from the response
        const quote = data.contents.quotes[0].quote;
        const author = data.contents.quotes[0].author;

        // Update the HTML elements
        quoteElement.textContent = `"${quote}"`;
        authorElement.textContent = `- ${author}`;
    } catch (error) {
        console.error('Error fetching quote:', error);
        quoteElement.textContent = "Unable to fetch quote. Please try again.";
        authorElement.textContent = "";
    }
}

// Call fetchQuote when the page loads
document.addEventListener("DOMContentLoaded", fetchQuote);

// Add event listener to the button
const generateButton = document.getElementById("generate-quote");
generateButton.addEventListener("click", fetchQuote);