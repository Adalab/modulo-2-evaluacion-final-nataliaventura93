'use strict';

const card = document.querySelector('.js_card');
const input = document.querySelector('.js_input');
const btnSearch = document.querySelector('.js_btnSearch');

const URL = 'api.disneyapi.dev/character?pageSize=50';
let cardList = [];

fetch(URL)
  .then((response) => response.json())
  .then((data) => {
    
  });
