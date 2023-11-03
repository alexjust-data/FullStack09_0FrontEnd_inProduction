import { getErrorMessages } from './validator';
import { renderError, clearErrors } from './view';

const FORM_ID = 'contactForm';

const contactForm = document.getElementById(FORM_ID);

const FORM_FIELDS = [
  'name',
  'email',
  'message',
];

contactForm.addEventListener('submit', evt => {
  evt.preventDefault();
  const form: HTMLFormElement = evt.target as any as HTMLFormElement;
  clearErrors(FORM_ID, FORM_FIELDS);
  FORM_FIELDS.forEach(field => {
    const errorMessage = getErrorMessages(form[field].validity);
    if (errorMessage) {
      console.log();
      renderError(FORM_ID, field, errorMessage);
    }
  });
});
