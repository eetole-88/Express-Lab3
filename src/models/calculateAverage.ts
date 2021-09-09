import Assignment from "./Assignment";

export const calculateAverage = (assignments: Assignment[]): number => {
  let overallScore = 0;
  let overallTotal = 0;

  for (let assignment of assignments) {
    if (assignment.completed === true) {
      overallScore += assignment.score;
      overallTotal += assignment.total;
    }
  }
  if (overallTotal) {
    return (overallScore / overallTotal) * 100;
  } else return 0;
};
