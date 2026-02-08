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


let omr = {"right":67,"wrong":23,"skip":10};
console.log(finalScore(omr));