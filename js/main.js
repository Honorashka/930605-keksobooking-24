function getRandomIntNumber(min, max) {
  if (max >= min && min > 0) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return (Math.floor(Math.random() * (max - min + 1)) + min);
  }
  return false;
}
getRandomIntNumber();

function getRandomFloatNumber(min, max, quantityConverter) {
  if (max >= min || min > 0) {
    const numPowerConverter = Math.pow(10, quantityConverter);
    return Math.round((Math.random() * (max - min) + min) * numPowerConverter) / numPowerConverter;
  }
  return false;
}
getRandomFloatNumber();
