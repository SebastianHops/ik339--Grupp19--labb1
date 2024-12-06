const checkBoxen = document.getElementById ('.divStyle');
const textFields = document.querySelectorAll('textfield');
const remove_Button = document.querySelector('button'); // behövde ändra till button istället för button-1 och queryselector istället för getelementbyclassname

const color_Field = document.getElementById('color'); // variabel hämtar från color input
const content_Field = document.getElementById('content'); // variabel hämtar från content input
const inputTextFields = document.querySelectorAll('.textfield');

console.log(textFields);

inputTextFields.forEach((inputField) => inputField.addEventListener('blur', handleBlur));

const divElement = document.getElementById('div_element');

function handleBlur(e) {
  const name = e.target.name;
  const value = e.target.value;
  divElement.innerHTML = '<p> Fältet" ' + name + '"har värdet "' + value + '" </p> ';
}

// skapar en anonym funktion som hämtar in användarens input i color och skriver ut det i console.log
color_Field.addEventListener('input', function() {
  const colorFieldValue = color.value;
  console.log(colorFieldValue);
})

 //samma som med color en eventlistener används för att läsa in användarens input i content textfield
content_Field.addEventListener('input', function () {
  const contentFieldValue = content.value;
  console.log(contentFieldValue);
})


// eventlistener läggs till för att rensa input i textfälten
remove_Button.addEventListener('click', function() {

  color_Field.value = ('');
  content_Field.value = ('');
});

/******************************************************************* 

 ***** anonym funktion bättre för kortare och simplare kod
 ***** icke anonym funktion bättre för återanvänding speciellt för komplexa sidor



 ***** En namngiven funktion som gör typ samma, men får den skriver bara ut från color inputen

function inputHandler() {
  const colorFieldValue = color.value;
  const contentFieldValue = content.value;
  console.log(colorFieldValue);
  console.log(contentFieldValue);
} 

***** Test för att se om funktionen funkar
  colorField.addEventListener('input', inputHandler);
  */

