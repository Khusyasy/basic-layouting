function createCard(data) {
  const card = document.createElement('a');
  card.classList.add('card');
  card.classList.add('animate');
  card.href = `/details.html?id=${data.idMeal}`;

  const cardImgDiv = document.createElement('div');
  cardImgDiv.classList.add('card-img');

  const cardImg = document.createElement('img');
  cardImg.src = data.strMealThumb + '/preview';
  cardImg.alt = data.strMeal;
  cardImgDiv.appendChild(cardImg);

  card.appendChild(cardImgDiv);

  const cardContent = document.createElement('div');
  cardContent.classList.add('card-content');

  const cardTitle = document.createElement('h3');
  cardTitle.innerText = data.strMeal;
  cardContent.appendChild(cardTitle);

  card.appendChild(cardContent);

  setTimeout(() => {
    card.classList.remove('animate');
  }, 500);
  return card;
}
