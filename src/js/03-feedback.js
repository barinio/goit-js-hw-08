import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const KEY_FORM = 'feedback-form-state';
let formData = {};

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormData, 500));

formData = JSON.parse(localStorage.getItem(KEY_FORM)) ?? {};

if (formData.email) {
  form.querySelector('input[name="email"]').value = formData.email;
}
if (formData.message) {
  form.querySelector('textarea[name="message"]').value = formData.message;
}

function onFormData(e) {
  const name = e.target.name;
  const value = e.target.value;
  formData[name] = value;

  localStorage.setItem(KEY_FORM, JSON.stringify(formData));
}

function onFormSubmit(e) {
  e.preventDefault();
  if (formData.email) {
    console.log('formData:', formData);
    e.target.reset();

    localStorage.removeItem(KEY_FORM);
    formData = {};
  }
}
