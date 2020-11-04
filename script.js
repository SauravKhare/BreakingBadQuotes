const endpoint = `https://www.breakingbadapi.com/api/quote/random`;
const quoteArea = document.querySelector('.quotes');
async function getQuotes() {
    const res = await fetch(endpoint);
    const data = await res.json();
    // const objData = Object.assign({}, data);
    // console.log(objData);
    console.log(data);
    return data;
}

async function displayQuote(event) {
    const quotes = await getQuotes();
    const html = `
    <h2 class="quote">${quotes[0].quote}</h2>
    <p class="author">- ${quotes[0].author}</p>
    `;
    console.log(quotes[0].quote);
    return quoteArea.innerHTML = html;
}

window.addEventListener('keydown', displayQuote);
window.addEventListener('load', displayQuote);
