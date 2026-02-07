function markAnalyzer(marksObj){
    let total = 0;

    let highestMark = -Infinity;
    let lowestMark = Infinity;

    let highestSubject = null;
    let lowestSubject = null;

    for(let subject in marksObj){
        let mark = marksObj[subject];
        total += mark;
        // console.log(subject, "=>", marks);


        if (mark > highestMark){
            highestMark = mark;
            highestSubject= subject;
        }
        if(mark < lowestMark){
            lowestMark = mark;
            lowestSubject = subject;
        }
    }
    
    let average = total/Object.keys(marksObj).length;
    return{
        Total: total,
        Average: average,
        HighestMark: highestMark,
        LowestMark: lowestMark
    }
}

let marksObj = markAnalyzer({
  math: 78,
  english: 65,
  physics: 88,
  bangla: 55,
  
});
console.log(marksObj);