const checkBoxen = document.getElementById ('.divStyle');
const textFields = document.querySelectorAll('textfield');
const buttonVariable = document.getElementsByClassName('button-1');
const divElement = document.getElementsByClassName('div_element');

console.log(textFields);
console.log(divElement);



function myFunction() {
  console.log(textFields);
}

buttonVariable.addEventListener('click', myFunction);