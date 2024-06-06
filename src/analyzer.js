const analyzer = {  
  getWordCount: (text) => {
    text = text.trim();
    if (text === ""){
      return 0;
    }
    const words = text.split(/\s+/);

    return words.length;
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },
  getCharacterCount: (text) => {
    return text.length;
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
  },
  getCharacterCountExcludingSpaces: (text) => {
    text = text.trim();
    if (text === ""){
      return 0;
    }
    const caract = text.replace(/[\W_]/g, "");
    return caract.length
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
  },
  getAverageWordLength: (text) => {    
    text = text.trim().split(/\s+/);
    if (text === ""){
      return 0;
    }
    let totalLength = 0;
    for (let i = 0; i < text.length; i++){
      totalLength += text[i].length;
    }
    return totalLength / text.length;
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    
  },
  getNumberCount: (text) => {
    const numeros = text.match(/\b\d+(\.\d+)?\b/g);
    if (numeros === null){
      return 0;
    }
    return numeros.length
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberSum: (text) => {
    const numeros = text.match(/\b\d+(\.\d+)?\b/g);
    let suma = 0;
     
    if (numeros){
      for (let i = 0; i < numeros.length; i++){
        suma += Number(numeros[i]); //convierte cada string a numero
      }
    }
    return suma;

    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
  },
};




export default analyzer;
