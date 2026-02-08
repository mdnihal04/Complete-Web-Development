function newPrice(currentPrice, discount) {
    // Your code here
    if(typeof currentPrice !== 'number' || typeof discount !=="number" || discount<0 || discount>100){
        return "Invalid";
    }

    let discountPrice = (currentPrice * discount) /100;
    let newPrice = currentPrice - discountPrice
    return newPrice.toFixed(3);
}



function validOtp(otp) {
    // Your code here
    if(typeof otp !== "string"){
        return "Invalid";
    }


    let isvalid = false;
    if(otp.length===8 && otp.startsWith("ph-")){
        isvalid = true;
    }

    return isvalid;
}




function finalScore(omr) {
    //write your code here

    let rightMarks = 0;
    let wrongMarks = 0;
    let skipMarks = 0;

    let inputMarks = 0;

    for(const status in omr){
        let marks = omr[status];
        inputMarks += marks;

        if(status == "right"){
            rightMarks += omr[status];
        }
        if(status == "wrong"){
            wrongMarks += omr[status]/2;
        }
        if(status == "skip"){
            skipMarks *= omr[status];
        }   
    }
    
    let result = rightMarks - wrongMarks + skipMarks;
    if(inputMarks!==100){
        return "Invalid";
    }else{
        return Math.round(result);
    }
}




function gonoVote(array) {
    //write your code here
    if(!Array.isArray(array)){
        return "Invalid";
    }

    let haVote = 0;
    let naVote = 0;

    for(const vote of array){
        if(vote ==="ha"){
            haVote++;
        }
        if(vote==="na"){
            naVote++;
        }
    }

    if(haVote>naVote){
        return true;
    }else if(naVote>haVote){
        return false;
    }else{
        return "equal"
    }
}


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