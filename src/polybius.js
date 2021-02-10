// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  const grid = {11: "a", 21: "b", 31: "c", 41: "d", 51: "e", 12: "f", 22: "g", 32: "h", 42: "i", 42: "j", 52: "k", 13: "l", 23: "m", 33: "n", 43: "o", 53: "p", 14: "q", 24: "r", 34: "s", 44: "t", 54: "u", 15: "v", 25: "w", 35: "x", 45: "y", 55: "z"}
  function polybius (input, encode = true) {return 1};
  
  function polubiusEncode (input) {}
    /*let arr = [];
   // let letters = input.split("");
    console.log(letters)
  }
   for (letter in input)
     for (letter in grid.alphabet)
    let gridDigits = Object.keys(grid) 
    let gridLetters = Object.values(grid)
 
    if( input[i] === gridLetters[j]){
      let codeNumber = gridDigits[j]
      arr.push(codeNumber)
    }
    
    
    if (input[i] === "j" || input[i] === "i"){
      arr.push(42)
    }
    
      if (input[i] === " ") {
        arr.push(" ")
        
      }
    
  }
return arr
  }
function polybiusDecode (input) {}  

  function polybius(input, encode = true) {
    if (encode) return polybiusEncode(input)
    return polybiusDecode(input)
//determine if need to encode(letters to numbers) or decode (numbers to letters)
    //if(typeOf input === string)
  if( typeof input === "string){
    //if encode: loop through grid, and convert letter to corresponding two digit number
    let arr = [];
   // let letters = input.split("");
    console.log(letters)
  }
   for (letter in input)
     for (letter in grid.alphabet)
    let gridDigits = Object.keys(grid) 
    let gridLetters = Object.values(grid)
 
    if( input[i] === gridLetters[j]){
      let codeNumber = gridDigits[j]
      arr.push(codeNumber)
    }
    
    
    if (input[i] === "j" || input[i] === "i"){
      arr.push(42)
    }
    
      if (input[i] === " ") {
        arr.push(" ")
        
      }
    
  }

  //else  
  };
  //if decode: loop through grid, seperate out 2 digit items
    //convert two digit numbers to corresponding letter
    //joing




  
*/


    
  

  return {
    polybius,
  };
})();

module.exports = polybiusModule.polybius;

