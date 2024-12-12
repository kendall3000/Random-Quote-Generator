const express = require('express');
const fetch = require('node-fetch');
const app = express();
const PORT = 3000;

// API key
const apiKey = 'KEoyHa1iDw9SnPmgepYnwd27VlZikT2NC0hW9s067a2011a2';

// Endpoint to fetch quote from the API
app.get('/quote', async (req, res) => {
    try {
        const response = await fetch('https://quotes.rest/quote/random.json', {
            method: 'GET',
            headers: {
                'X-TheySaidSo-Api-Secret': apiKey
            }
        });
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error fetching quote:', error);
        res.status(500).json({ error: 'Failed to fetch quote' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
