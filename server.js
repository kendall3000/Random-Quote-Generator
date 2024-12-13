import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors'; 

dotenv.config(); // Load environment variables from .env file

const app = express();
const PORT = 3000;

app.use(cors());

// Use the API key from the .env file
const apiKey = process.env.API_KEY;
// Fetch the quote from the API
const fetchQuote = async () => {
    try {
        const response = await fetch("https://quotes.rest/quote/random.json", {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${apiKey}`,  // API token in Authorization header
            }
        });

        // Log the raw response before consuming the body
        const responseText = await response.text();
        console.log(responseText);  // Log the raw response text

        // Now parse the JSON from the response
        const data = JSON.parse(responseText);
        return data;
    } catch (error) {
        throw error;
    }
};

app.get("/quote", async (req, res) => {
    try {
        const data = await fetchQuote();
        const quote = data.contents.quotes[0].quote;
        const author = data.contents.quotes[0].author;
        // Send only the quote and author
        res.json({ quote, author });
    } catch (error) {
        console.error("Error fetching quote:", error);
        res.status(500).json({ error: "Failed to fetch quote" });
    }
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
