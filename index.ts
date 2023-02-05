import { Result } from "./types";
import { gradePoint } from "./function";
import { coursesPoint } from "./scores";

function calculateCGPA(scores: Result[]): number {
  let totalUnitPoint = 0;

  let totalGradePoint = scores.reduce((result, course) => {
    let courseUnitPoint = coursesPoint[course.course].unit;
    totalUnitPoint += courseUnitPoint;

    let courseGradePoint = courseUnitPoint * gradePoint(course.score);
    return result + courseGradePoint;
  }, 0);

  var scoreGP = totalGradePoint / totalUnitPoint;
  console.log(
    JSON.stringify(
      {
        totalGradePoint,
        totalUnitPoint,
      },
      null,
      2
    )
  );
  return Math.round((scoreGP + Number.EPSILON) * 100) / 100;
}

let myCGPA = calculateCGPA([
  {
    course: "MAT111",
    score: 100,
  },
  {
    course: "MAT121",
    score: 100,
  },
  {
    course: "CSC102",
    score: 100,
  },
  {
    course: "GES107",
    score: 100,
  },
  {
    course: "GES108",
    score: 100,
  },
  {
    course: "PHY102",
    score: 100,
  },
  {
    course: "STA115",
    score: 100,
  },
]);

console.log(`Total GP is: ${myCGPA}`);
