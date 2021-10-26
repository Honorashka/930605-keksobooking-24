import {getRandomFloatNumber,getRandomItem,getRandomIntNumber,getArray} from './utils.js';

const MIN_LINE = 1;
const MAX_LINE = 10;
const MIN_PRICE = 3000;
const MAX_PRICE = 869000;
const MIN_ROOMS = 2;
const MAX_ROOMS = 243;
const MIN_GUESTS = 1;
const MAX_GUESTS = 5000;
const MIN_LATITUDE = 35.65000;
const MAX_LATITUDE = 35.70000;
const MIN_LONGITUDE = 139.70000;
const MAX_LONGITUDE = 139.80000;
const MIN_FLOATING_POINT = 1;
const MAX_FLOATING_POINT = 5;

const TYPE = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

const OFFER_TITLE = [
  'Айдар',
  'Пицунда',
  'Космос',
];

const CHECKIN = [
  '12:00',
  '13:00',
  '14:00',
];

const CHECKOUT = [
  '12:00',
  '13:00',
  '14:00',
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const DESCRIPTION = [
  'В 5 минутах от моря, со своим пляжем.',
  'Красивая уютная бухта,  песчанным берегом.',
  'Прекрасный вид на горы из окна',
  'Выход сразу на подъемники',
];

const PHOTOS_ARR = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const getRandomNumberAvatar = () => {
  const numberImgAvatar = getRandomIntNumber(MIN_LINE,MAX_LINE);
  if (numberImgAvatar >= 10) {
    return `img/avatars/user${numberImgAvatar}.png`;
  }
  return `img/avatars/user${String('0') + numberImgAvatar}.png`;
};

const generationOffer = () => {
  const latitude = getRandomFloatNumber(MIN_LATITUDE,MAX_LATITUDE,getRandomIntNumber(MIN_FLOATING_POINT,MAX_FLOATING_POINT));
  const longitude = getRandomFloatNumber(MIN_LONGITUDE,MAX_LONGITUDE,getRandomIntNumber(MIN_FLOATING_POINT,MAX_FLOATING_POINT));
  return{
    author: {
      avatar: getRandomNumberAvatar(),
    },
    offer: {
      title: getRandomItem(OFFER_TITLE),
      adress: `${latitude}, ${longitude}`,
      price:getRandomIntNumber(MIN_PRICE,MAX_PRICE),
      type: getRandomItem(TYPE),
      rooms: getRandomIntNumber(MIN_ROOMS,MAX_ROOMS),
      guests: getRandomIntNumber(MIN_GUESTS,MAX_GUESTS),
      checkin: getRandomItem(CHECKIN),
      checkout: getRandomItem(CHECKOUT),
      features: getArray(FEATURES),
      description: getRandomItem(DESCRIPTION),
      photos: getArray(PHOTOS_ARR),
    },
    location: {
      lat: latitude,
      lng: longitude,
    },
  };
};


const createCards = (arrayLength) => Array.from({length: arrayLength}, generationOffer);
createCards(MAX_LINE);

export {generationOffer,createCards};
