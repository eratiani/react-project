const currForm = {};
let requestKey;
export function updateCurrForm(updatedForm) {
  Object.assign(currForm, updatedForm);
}
export function updateRequestKey(updateRequestKey) {
  requestKey = updateRequestKey;
}
export function getCurrentForm() {
  return currForm;
}
export function getRequestKey() {
  return requestKey;
}
