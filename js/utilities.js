function getInputValueById(inputId) {
  const getInput = document.getElementById(inputId);
  const inputValueString = getInput.value;
  const inputValue = parseFloat(inputValueString);
  getInput.value = "";
  return inputValue;
}

function getElementValueById(element) {
  const getElement = document.getElementById(element);
  const elementStringValue = getElement.innerText;
  const elementValue = parseFloat(elementStringValue);
  return elementValue;
}

function setValue(element, newValue) {
  const getElement = document.getElementById(element);
  getElement.innerText = newValue;
}
