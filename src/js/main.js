'use strict';

let ulList = document.querySelector('.js_card_list');
const input = document.querySelector('.js_input');
const btnSearch = document.querySelector('.js_btnSearch');

const URL = 'https://dev.adalab.es/api/disney?pageSize=50';
let cardList = [];

function renderCard(cardData) {
  const card = `<li class="card">
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
}

fetch(URL)
  .then((response) => response.json())
  .then((data) => {
    cardList = data.data;
    renderCardList(cardList);
  });
