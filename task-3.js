const input = "E ducation is powerful.";
const vowels = ['a', 'e', 'i', 'o', 'u'];
const lowerCaseStr = input.toLowerCase();

let allVowelsPresent = true;
for (let i = 0; i < vowels.length; i++) {
  if (!lowerCaseStr.includes(vowels[i])) {
    allVowelsPresent = false;
    break;
  }
}

console.log(allVowelsPresent);
