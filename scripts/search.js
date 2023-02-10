const menuContainerEl = document.querySelector('.menu-container');
const searchInputEl = document.querySelector('#q');
const resultEl = document.querySelector('#result');

async function main() {
  const urlParams = new URLSearchParams(window.location.search);
  const query = urlParams.get('q');
  if (!query) {
    resultEl.innerText = 'Input your search query';
  } else {
    searchInputEl.value = query;
    resultEl.innerText = `Search results for "${query}"`;
  
    loadingSpinner(true);
    const meals = await getSearchResult(query);
    loadingSpinner(false);
    if (!meals || meals.length === 0) {
      const infoEl = document.createElement('h2');
      infoEl.innerText = 'No results found';
      menuContainerEl.appendChild(infoEl);
    } else {
      for (const meal of meals) {
        const card = createCard(meal);
        menuContainerEl.appendChild(card);
      }
    }
  }
}

main();
