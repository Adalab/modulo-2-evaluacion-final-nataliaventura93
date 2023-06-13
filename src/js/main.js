'use strict';

let ulList = document.querySelector('.js_card_list');
const ulFavorites = document.querySelector('.js_list_favorites');
const URL = 'https://dev.adalab.es/api/disney?pageSize=50';
let cardList = [];
let FavouriteCardList = [];

fetch(URL)
  .then((response) => response.json())
  .then((data) => {
    cardList = data.data;
    renderCardList(cardList);
  });

renderFavoriteList();

function renderCard(cardData) {
  const card = `<li id="${cardData._id}" class="card js_li_card">
      <article>
        <img
          class="card_img"
          src="${cardData.imageUrl}"
          alt="disney_character"
        />
        <p class="card_name">${cardData.name}</p>
      </article>
    </li>`;
  return card;
}

function renderCardList(cardDataList) {
  ulList.innerHTML = '';
  for (const cardItem of cardDataList) {
    ulList.innerHTML += renderCard(cardItem);
  }
  const liList = document.querySelectorAll('.js_li_card');
  for (const li of liList) {
    li.addEventListener('click', handleClickFavorites);
  }
}

function renderFavoriteList() {
  ulFavorites.innerHTML = '';
  let FavoritesLS = localStorage.getItem('ListFavorites');
  if(FavoritesLS !== null){
    FavouriteCardList = JSON.parse(FavoritesLS);
    for (const favorite of FavouriteCardList) {
      ulFavorites.innerHTML += renderCard(favorite);
    }
  }
}
function handleClickFavorites(event) {
  const id = Number(event.currentTarget.id);
  let selectedFavoriteCard = cardList.find((card) => card._id === id);
  const indexCard = FavouriteCardList.findIndex((card) => card._id === id);

  if (indexCard === -1) {
    FavouriteCardList.push(selectedFavoriteCard);
  }
  localStorage.setItem('ListFavorites', JSON.stringify(FavouriteCardList));
  renderFavoriteList();
}

