
export const renderError = (fromId: string, formName: string, value: string) => {
  const errorElement = document.querySelector(`#${fromId} .${formName}-error-message`);
  errorElement.classList.add('show');
  errorElement.textContent = value;
};

export const clearErrors = (fromId: string, fields: string[] ) => {
  fields.forEach(field => {
    const errorElement = document.querySelector(`#${fromId} .${field}-error-message`);
    errorElement.classList.remove('show');
    errorElement.textContent = '';
  });
};
