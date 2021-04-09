// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  const grid = {11: "a", 21: "b", 31: "c", 41: "d", 51: "e", 12: "f", 22: "g", 32: "h", 52: "k", 13: "l", 23: "m", 33: "n", 43: "o", 53: "p", 14: "q", 24: "r", 34: "s", 44: "t", 54: "u", 15: "v", 25: "w", 35: "x", 45: "y", 55: "z"}
  const gridLetters = Object.values(grid);
  const gridDigits = Object.keys(grid);

 
  function splitIntoChunks (input){
   let chunks = [];
    for (let i = 0; i < input.length; i+=2){
          let pair= input.slice(i, i+2);
          chunks.push(pair);
          } 
          return chunks
  }
 
  
  function digitToLetter (chunks){
    let final = []; 
    
    for (let i = 0; i < chunks.length; i++){
            if(chunks[i] === "42"){
              final.push("(i/j)")
            }
            for (let j = 0; j< gridDigits.length; j++){
              if (chunks[i] === gridDigits[j]){
                let codeLetter = gridLetters[j];
                final.push(codeLetter)
              }
            }
          }
           
         
           return final
  }



  function polybiusEncode(input){
    input = input.toLowerCase();
    let final = []
    for (let i = 0; i < input.length; i++){
      let letter = input[i];
      if(letter === "j" || letter === "i"){
        final.push(42)
      }
      if (input[i] === " "){
         final.push(" ");
      }
      for (let j = 0; j < gridLetters.length; j++){
        if (letter === gridLetters[j]){
          let codeDigits = gridDigits[j];
          final.push(codeDigits);
        }
      }
    }
    return final.join("")
  }
  



  function polybiusDecode(input){
    let final = [];

    // tests to see if number of digits is even
        let spaceTestStr = input.replace(/ /g,'');
        if (spaceTestStr.length % 2 != 0) return false;
    
    // split input into multiple string in an array, based on spaces (accounts for spaces in input)
         let splitParts = input.split(" ");
         console.log(splitParts)
         
    // if there are spaces 
        if (splitParts.length > 1) {
           
           for (i = 0; i < splitParts.length; i++){
             let chunks = splitIntoChunks(splitParts[i]);
             let finalInArray = digitToLetter(chunks);
             let x = finalInArray.join("")
             final.push(x)
            }
           return final.join(" ");
          }
      // if no spaces
         else {
           let chunks = splitIntoChunks(input);
           console.log(chunks)
           let finalInArray = digitToLetter(chunks);
           let x = finalInArray.join("")
           return x
         }

      }
    
    
      
    
  function polybius (input, encode = true) {
    if (encode) return polybiusEncode(input);
    return polybiusDecode(input);
    
  }



  return {
    polybius,
  };
})();

module.exports = polybiusModule.polybius;

