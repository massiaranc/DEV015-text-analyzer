import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto

const texto = document.querySelector('[name="user-input"]');
const Clasificacion = document.querySelectorAll(".Clasificacion");
//clasificacion es vinculo de <li>
const boton = document.getElementById('reset-button');

const wordCountSpan = Clasificacion[0];
const charCountSpan = Clasificacion[1];
const charCountNoSpacesSpan = Clasificacion[2];
const numberCountSpan = Clasificacion[3];
const numberSumSpan = Clasificacion [4];
const avgWordLengthSpan = Clasificacion[5];

const updateClasificacion = () => {
  const text = texto.value;
    
  const wordCount = analyzer.getWordCount(text);
  wordCountSpan.textContent = `Recuento de palabras: ${wordCount}`;

  const charCount = analyzer.getCharacterCount(text);
  charCountSpan.textContent = `Recuento de caracteres: ${charCount}`;

  const charCountNoSpaces = analyzer.getCharacterCountExcludingSpaces(text);
  charCountNoSpacesSpan.textContent = `Recuento de caracteres sin espacios ni signos de puntuación: ${charCountNoSpaces}`

  const avgWordLength = analyzer.getAverageWordLength(text);
  avgWordLengthSpan.textContent = `Longitud media de las palabras: ${avgWordLength}`;

  const numberCount = analyzer.getNumberCount(text);
  numberCountSpan.textContent = `Recuento de números: ${numberCount}`;

  const numberSum = analyzer.getNumberSum(text);
  numberSumSpan.textContent = `Suma total de números: ${numberSum}`;

}



texto.addEventListener("input", updateClasificacion);
boton.addEventListener("click", function() {
  texto.value = "";
  updateClasificacion();

});

