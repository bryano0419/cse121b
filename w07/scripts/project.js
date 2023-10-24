
const loadQuotes = async () => {
    try {
      const response = await fetch(`https://run.mocky.io/v3/d5055ffa-8878-4089-babb-4f50705b6c95`);
      const data = await response.json();
      return data.quotes;
    } catch (error) {
      console.error(`Error loading quotes: ${error}`);
      return [];
    }
  }
  
  const generateQuote = async () => {
    const quotes = await loadQuotes();
    if (quotes.length > 0) {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      const randomQuote = quotes[randomIndex];
      
      const capitalizedQuote = randomQuote.split(' ').map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      }).join(' ');
  
      document.getElementById("quote").textContent = capitalizedQuote;
    } else {
      document.getElementById("quote").textContent = "No quotes available.";
    }
  }
  
  document.getElementById("generate").addEventListener("click", generateQuote);
  
  generateQuote();