function getRandomIntNumber(min, max) {
  if (max >= min) {
    min = Math.ceil(Math.abs(min));
    max = Math.floor(Math.abs(max));
    return (Math.floor(Math.random() * (max - min + 1)) + min);
  }
  return false;
}
getRandomIntNumber();

function getRandomFloatNumber(min, max, quantityConverter) {
  if (max >= min) {
    min = Math.abs(min);
    max = Math.abs(max);
    const numPowerConverter = Math.pow(10, quantityConverter);
    return Math.round((Math.random() * (max - min) + min) * numPowerConverter) / numPowerConverter;
  }
  return false;
}
getRandomFloatNumber();
