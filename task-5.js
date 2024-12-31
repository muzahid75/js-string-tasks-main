const input = "capitalize every first letter of each word in a string";

const result = input.split(' ').map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(' ');

console.log(result);