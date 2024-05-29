import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto

let texto = document.querySelector('[name="user-input"]');
let Clasificacion = document.querySelectorAll(".Clasificacion");
//clasificacion es vinculo de <li>
const boton = document.getElementById('reset-button');

let wordCountSpan = Clasificacion[0];
let charCountSpan = Clasificacion[1];
let charCountNoSpacesSpan = Clasificacion[2];
let numberCountSpan = Clasificacion[3];
let numberSumSpan = Clasificacion [4];
let avgWordLengthSpan = Clasificacion[5];

let updateClasificacion = () => {
    let text = texto.value;
    
    let wordCount = analyzer.getWordCount(text);
    wordCountSpan.textContent = `Recuento de palabras: ${wordCount}`;

    let charCount = analyzer.getCharacterCount(text);
    charCountSpan.textContent = `Recuento de caracteres: ${charCount}`;

    let charCountNoSpaces = analyzer.getCharacterCountExcludingSpaces(text);
    charCountNoSpacesSpan.textContent = `Recuento de caracteres sin espacios ni signos de puntuación: ${charCountNoSpaces}`

    let avgWordLength = analyzer.getAverageWordLength(text);
    avgWordLengthSpan.textContent = `Longitud media de las palabras: ${avgWordLength}`;

    let numberCount = analyzer.getNumberCount(text);
    numberCountSpan.textContent = `Recuento de números: ${numberCount}`;

    let numberSum = analyzer.getNumberSum(text);
    numberSumSpan.textContent = `Suma total de números: ${numberSum}`;

}



texto.addEventListener("input", updateClasificacion);
boton.addEventListener("click", function() {
    texto.value = "";
       updateClasificacion();

});

