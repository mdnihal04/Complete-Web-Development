function analyzeText(str) {
    // Your code here
    if(typeof str !== "string" || str.length<=0){
        return "Invalid";
    }
    
    let words = str.split(" ");
    let longestWord = words[0];
    for(const word of words){
        if(word.length>longestWord.length){
            longestWord=word;
        }
    }

    let arrayString = words.join("");
    let token = arrayString.length;
    return {
        longwords: longestWord,
        token
    }
}

let str = "Keep coding keep shining";
console.log(analyzeText(str));