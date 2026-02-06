
// 1==> Celsius to fahrenheit function

function fahrenheit(celsius){
    let sum = (celsius * 1.8) + 32;
    return sum;
}

console.log(fahrenheit(37.5));



// 2 ==> Count item in array
function countItem(arr){
    let count = 0;
    for(const number of arr){
        if(number === 5){
            count++;
        }
    }
    return count;
}

let arr = [5,6,11,12,98, 5];
console.log(countItem(arr));


// 3 ==> Count vowels in a string

function countVowels(str){
    let text = str.toLowerCase();
    const vowels = "aeiou";
    let count = 0;
    for(let i = 0; i<=text.length; i++){
        if(vowels.includes(text[i])){
            count++
        }
    }
    return count;
}

let str = "This is a javasript programming task"
console.log(countVowels(str))



// 4 ==> Find longest word in a string
function longestword(str){
    let words = str.split(" ");
    let longest = "";
    for (const word of words){
        if(word.length>longest.length){
            longest = word;
        }
    }
    return longest;
}
let str = "This is a javasript programming task";
console.log(longestword(str));


// Generate random number between 10 and 20
const randomNum = Math.floor(Math.random() * 11) + 10;
console.log(randomNum);