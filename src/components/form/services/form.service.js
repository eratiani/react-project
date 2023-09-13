const currForm = {};
export function updateCurrForm(updatedForm) {
  Object.assign(currForm, updatedForm);
}

export function getCurrentForm() {
  return currForm;
}
