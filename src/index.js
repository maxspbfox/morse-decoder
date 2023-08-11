const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  const chunkLength = 10;

  const space = "**********";

  let arr = [];

  for (let i = 0; i < expr.length; i += chunkLength) {
    const tmp = expr.slice(i, i + chunkLength);

    let decodedLetter = "";

    if (tmp === space) {
      decodedLetter = tmp;
    } else {
      for (let j = 0; j < tmp.length; j += 2) {
        let tmpLetter = tmp.slice(j, j + 2);
        switch (tmpLetter) {
          case "10":
            decodedLetter += ".";
            break;
          case "11":
            decodedLetter += "-";
            break;
        }
      }
    }

    arr.push(decodedLetter);
  }

  let result = "";

  arr.forEach((item) => {
    if (item === space) {
      result += " ";
    } else {
      result += MORSE_TABLE[item];
    }
  });

  return result;
}

module.exports = {
  decode,
};
