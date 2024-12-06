const checkBoxen = document.getElementById ('divStyle'); // hämtar checkbox elementet 
const remove_Button = document.querySelector('button'); // behövde ändra till button istället för button-1 och queryselector istället för getelementbyclassname

const color_Field = document.getElementById('color'); // variabel tilldelas från color input
const content_Field = document.getElementById('content'); // variabel tilldelas från content input
const inputTextFields = document.querySelectorAll('.textfield');
const divElement = document.getElementById('div_element');

// for each loopar går igenom textfälten med hjälp av variabeln inputTextFields och lägger till en eventlistner för varje element det vill säga 2,
// blur gör så att när du lämnar en inputruta så blir det en händelse vilket då funktionen handleblur kommer in
inputTextFields.forEach((inputField) => inputField.addEventListener('blur', handleBlur));


//lägger till en eventlistener med händlse click på button och hämtar funktion "handleclick"
remove_Button.addEventListener('click', handleClick);

// funktionen handleClick är en anonym funktion och den loopar igenom textfälten för att sedan ta bort texten och även divElement som vi skapat 
function handleClick() {
  inputTextFields.forEach((textfield) => {
    textfield.value ='';
    divElement.remove();
  })
}

// funktionen handle blur skriver ut med hjälp av händelsen blur, input texten i div elemeten
function handleBlur(e) {
  const name = e.target.name;
  const value = e.target.value;
  divElement.innerHTML = '<p> Fältet" ' + name + '" har värdet "' + value + '" </p> ';
}

// skapar en anonym funktion för checkbox och en eventlistener med händelsen click
// funktion gör att om checkboxen är ifylld så hämtar den in color input och och sätter divelementets bakgrundsfärg till användarens färgval i input
checkBoxen.addEventListener('click', function() {
  if (checkBoxen.checked) {
    const colorValue = color_Field.value;
    if (colorValue) {
      divElement.style.backgroundColor = colorValue;
    }
  }
})



// eventlistener läggs till för att rensa input i textfälten och ta bort div i en anonym funktion
//remove_Button.addEventListener('click', function() {

  //color_Field.value = ('');
  //content_Field.value = ('');
  //divElement.remove();
//});

/******************************************************************* 
 * // eventlistener läggs till för att rensa input i textfälten och ta bort div i en anonym funktion
//remove_Button.addEventListener('click', function() {

  //color_Field.value = ('');
  //content_Field.value = ('');
  //divElement.remove();
//});
 * 

 ***** anonym funktion bättre för kortare och simplare kod
 ***** icke anonym funktion bättre för återanvänding speciellt för komplexa sidor
*/
