const morseCode = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....', 'I': '..', 'J': '.---',
    'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-',
    'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-', 'Y': '-.--', 'Z': '--..',
    '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....',
    '6': '-....', '7': '--...', '8': '---..', '9': '----.', '0': '-----',
    ' ': '/'
};


const reverseMorseCode = {};
// Create a reverse mapping of Morse code for decoding
for (let key in morseCode) {
  if (morseCode.hasOwnProperty(key)) 
    reverseMorseCode[morseCode[key]] = key;
}

function translateToMorse() {
    var inputText = document.getElementById('latin').value.toUpperCase();
    var morseResult = inputText.split('').map(function(char) {
        return morseCode[char] || '';
      }).join(' ');
    
      document.getElementById('morse').value = morseResult;
    saveTextAreas();
}


function translateToText() {
    const inputMorse = document.getElementById('morse').value;
    const textResult = inputMorse.split(' ').map(function(morse) {
      return reverseMorseCode[morse] || '';
    }).join('');
    document.getElementById('latin').value = textResult;
    saveTextAreas();
  }

  function saveTextAreas() {
    localStorage.setItem('morse', document.getElementById('morse').value);
    localStorage.setItem('latin', document.getElementById('latin').value);
}

// Load text areas from localStorage
function loadTextAreas() {
    document.getElementById('morse').value = localStorage.getItem('morse') || '';
    document.getElementById('latin').value = localStorage.getItem('latin') || '';
}

window.onload = loadTextAreas;
