
import throttle from 'lodash.throttle';

const STORAGE_KEY = "feedback-form-state";

const refs = {
  form: document.querySelector(".feedback-form"),
  emailInput: document.querySelector('input[name="email"]'),
  textarea: document.querySelector("textarea"),
};

refs.form.addEventListener("submit", onFormSubmit);
refs.form.addEventListener("input", throttle(saveFormData, 500));
populateForm();

function onFormSubmit(evt) {
  evt.preventDefault();
  clearLocalStorage();
  logFormData();
  clearFormFields();
}

function saveFormData() {
  const formData = {
    email: refs.emailInput.value,
    message: refs.textarea.value,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateForm() {
  const savedFormData = localStorage.getItem(STORAGE_KEY);

  if (savedFormData) {
    const { email, message } = JSON.parse(savedFormData);
    refs.emailInput.value = email;
    refs.textarea.value = message;
  }
}

function clearFormFields() {
  refs.emailInput.value = "";
  refs.textarea.value = "";
}

function clearLocalStorage() {
  localStorage.removeItem(STORAGE_KEY);
}

function logFormData() {
  const formData = {
    email: refs.emailInput.value,
    message: refs.textarea.value,
  };
  console.log(formData);
}