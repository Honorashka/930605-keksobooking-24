// 'use strict';
import {generationOffer} from './data.js';
import {declOfNum} from './utils.js';

const comparison = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};

const DECLINATION = {
  rooms: ['комната', 'комнаты', 'комнат'],
  guests: ['гостя', 'гостей','гостей'],
};

const AMOUNT = 2;
const dataInfo = generationOffer();
const cardTemplate = document.querySelector('#card').content.querySelector('.popup');
const mapCanvas = document.querySelector('#map-canvas');


//генерация карточки в разметку
const generationDataCards = (template) => {
  const cardElement = cardTemplate.cloneNode(true);
  cardElement.querySelector('.popup__title').textContent = template.offer.title;
  cardElement.querySelector('.popup__text--address').textContent = template.offer.adress;
  cardElement.querySelector('.popup__text--price').textContent = `${template.offer.price} ₽/ночь`;
  cardElement.querySelector('.popup__type').textContent = comparison[template.offer.type];
  cardElement.querySelector('.popup__text--capacity').textContent = `${template.offer.rooms} ${declOfNum(template.offer.rooms, DECLINATION.rooms)} для ${template.offer.guests} ${declOfNum(template.offer.guests,DECLINATION.guests)}`;
  cardElement.querySelector('.popup__text--time').textContent = `Заезд после ${template.offer.checkin}, выезд до ${template.offer.checkout}.`;
  cardElement.querySelector('.popup__features').textContent = template.offer.features;
  cardElement.querySelector('.popup__description').textContent = template.offer.description;
  cardElement.querySelector('.popup__photos').src = template.offer.photos;
  cardElement.querySelector('.popup__avatar').src = template.author.avatar;
  return cardElement;
};

// функция кол-во раз генерирования карточек

const addCardCanvas = (nmb) => {
  const cards = [];
  for (let i=0; i <= nmb; i++) {
    cards.push(mapCanvas.appendChild(generationDataCards(dataInfo)));
  }
  return cards;
};

addCardCanvas(AMOUNT - 1);

