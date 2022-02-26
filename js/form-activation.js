const adForm = document.querySelector('.ad-form');
const mapFilter = document.querySelector('.map__filters');

const deactiveForm = (form) => {
  form.classList.add('ad-form--disabled');
  const formChildren = form.children;
  formChildren.disabled = true;
};

const activeForm = (form) => {
  form.classList.remove('ad-form--disabled');
  const formChildren = form.children;
  formChildren.disabled = false;
};


export const makeActive = () => {
  activeForm(adForm);
  activeForm(mapFilter);
};

export const makeDeactive = () => {
  deactiveForm(adForm);
  deactiveForm(mapFilter);
};
