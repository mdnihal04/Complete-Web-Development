// Problem 2: Student Marks Analyzer
// Function name: analyzeMarks(marksObj)
// Statement:
//  Return total marks, average marks, highest scoring subject, and lowest scoring subject.
// Test case 1
// Input: { math: 78, english: 65, physics: 88, bangla: 55 }
// Output: { total: 286, average: 71.5, highest: "physics", lowest: "bangla" }

function analyzeMarks(marksObj) {
  //   console.log(marksObj);

  let total = 0;

  let highestMark = -Infinity;
  let lowestMark = Infinity;

  let highestSubject = null;
  let lowestSubject = null;

  for (let subject in marksObj) {
    //subject = biology
    // console.log(key, "-> ", value);
    let mark = marksObj[subject];
    // total += mark;
    total = total + mark;

    if (mark > highestMark) {
      highestMark = mark;
      highestSubject = subject;
    }

    if (mark < lowestMark) {
      lowestMark = mark;
      lowestSubject = subject;
    }
  }

  console.log("highestmark -> ", highestMark);
  console.log("lowestMark -> ", lowestMark);
  console.log("highest subject -> ", highestSubject);
  console.log("lowest subject -> ", lowestSubject);

  let average = total / Object.keys(marksObj).length;
  //   console.log("Total -> ", total);
  //   console.log("average -> ", average);

  return {
    total,
    average,
    highestSubject,
    lowestSubject,
  };
}

let output = analyzeMarks({
  math: 78,
  english: 65,
  physics: 88,
  bangla: 55,
  biology: 99,
});
console.log(output);
