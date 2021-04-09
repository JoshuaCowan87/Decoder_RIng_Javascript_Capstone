// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
// assign variables
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    
    function caesar(input, shift, encode = true) {
        if (!shift || shift === 0 || shift > 25 || shift < -25) 
        return false;
        input = input.toLowerCase();
        let final = []

        for (let i = 0; i < input.length; i++) {
          let letter = input[i];
          let position = alphabet.indexOf(letter);
          
          if (position < 0) {
            final.push(letter);
            
          }
          else {
            let newPosition = (position + shift);
            if(newPosition > 25){ newPosition = newPosition - 26};
            if(newPosition < 0){ newPosition = newPosition + 26};
            final.push(alphabet[newPosition]);
          }
        }

    return final.join("")
    }
  
 
    return {
      caesar,
    };
  })();
  
  module.exports = caesarModule.caesar;
  


