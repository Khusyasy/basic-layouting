const menuContainerEl = document.querySelector('.menu-container');

async function main() {
  loadingSpinner(true);
  const meals = await getHomepageMeal();
  loadingSpinner(false);
  for (const meal of meals) {
    const card = createCard(meal);
    menuContainerEl.appendChild(card);
  }
}

main();
