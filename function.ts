export const gradePoint = (score: number) => {
  if (score <= 100 && score >= 70) {
    return 4;
  } else if (score <= 69 && score >= 60) {
    return 3;
  } else if (score <= 59 && score >= 50) {
    return 2;
  } else if (score <= 49 && score >= 45) {
    return 1;
  } else {
    return 0;
  }
};
