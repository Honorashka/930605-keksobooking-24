const getRandomFloatNumber = (min, max, quantityConverter) => {
  if (max >= min && min > 0) {
    const numPowerConverter = Math.pow(10, quantityConverter);
    return Math.round((Math.random() * (max - min) + min) * numPowerConverter) / numPowerConverter;
  }
  return false;
};


const getRandomItem = (arr) => {
  const index = Math.floor(Math.random() * arr.length);
  return arr[index];
};

const getRandomIntNumber = (first, second) => {
  const lower = Math.ceil(Math.min(Math.abs(first), Math.abs(second)));
  const upper = Math.floor(Math.max(Math.abs(first), Math.abs(second)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getArray = (features) => {
  const maxLength = features.length;
  const lengthOfArray = getRandomIntNumber(1, maxLength);
  const array = [];

  while (array.length < lengthOfArray) {
    const indexOfEl = getRandomIntNumber(0, maxLength - 1);
    const el = features[indexOfEl];

    if (!array.includes(el)) {
      array.push(el);
    }
  }
  return array;
};

export {getRandomFloatNumber,getRandomItem,getRandomIntNumber,getArray};
