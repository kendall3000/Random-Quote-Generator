# Random-Quote-Generator

The Random Quote Generator is a web application that dynamically fetches and displays random quotes along with their authors. Users can toggle between light and dark modes, and the cursor changes dynamically to match the selected theme with a sun or moon icon.

## Features
- **Random Quotes**: Fetch and display random quotes from an external API.
- **Light/Dark Mode Toggle**: Toggle between light and dark themes, with the cursor icon changing dynamically.
- **User-Friendly Design**: Responsive and intuitive interface with smooth transitions.

## Technologies Used
### Frontend:
- **HTML**: For structuring the web page.
- **CSS**: For styling the layout and creating smooth theme transitions.
- **JavaScript**: For handling user interactions, theme toggling, and API requests.

### Backend:
- **[TheySaidSo Quotes API](https://theysaidso.com/)**: Provides the random quotes. You need an API key to fetch data from this service.

## Setup Instructions
Follow these steps to download, configure, and run the project on your local machine:

### Prerequisites
- A web browser.
- A text editor (e.g., VS Code).
- Internet connection to fetch quotes from the API.
- API key from [TheySaidSo](https://theysaidso.com/).

### Steps
1. **Clone the Repository**
   ```bash
   git clone https://github.com/kendall3000/Random-Quote-Generator.git
   cd Random-Quote-Generator
   ```

2. **Add API Key**
   - Go to [TheySaidSo](https://theysaidso.com/) and sign up for a free account.
   - Obtain your API key.
   - Create a `.env` file in the project directory.
   - Add the following line to your `.env` file:
     ```env
     API_KEY=your_api_key_here
     ```

3. **Run the Project**
   - Open `index.html` in your browser to view the application.

4. **Customize as Needed**
   - Feel free to modify the styling in `quote-style.css` or enhance functionality in `quote.js`.

## How It Works
1. **Fetching Quotes**: JavaScript sends a request to the TheySaidSo Quotes API to retrieve random quotes.
2. **Theme Toggle**: CSS and JavaScript manage the light/dark mode styles and dynamically change the cursor icon.
3. **LocalStorage**: Saves the user's theme preference to maintain the chosen theme across sessions.

## Usage
- Click the "Get New Quote" button to fetch a random quote.
- Use the "Toggle Dark/Light Mode" button to switch themes.

## Credits
- **API Provider**: [TheySaidSo Quotes API](https://theysaidso.com/).
- **Icons**: Locally hosted sun and moon icons for cursor themes.

## License
This project is licensed under the MIT License.

## Contributing
Contributions are welcome! Feel free to fork the repository and submit a pull request with your improvements or suggestions.

---

Thank you for checking out the Random Quote Generator! If you have any questions or encounter any issues, please open an issue on the GitHub repository.

### Repository Link
[Random Quote Generator GitHub Repository](https://github.com/kendall3000/Random-Quote-Generator)
