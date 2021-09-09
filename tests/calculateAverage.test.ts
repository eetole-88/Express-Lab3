import Assignment from "../src/models/Assignment";
import { calculateAverage } from "../src/models/calculateAverage";

describe("calculateAverage tests", () => {
  test("calculateAverage function", () => {
    // Arrange
    const testAssignments: Assignment[] = [
      { assignment: "Test 1", score: 10, total: 15, completed: true },
      { assignment: "Test 2", score: 8, total: 10, completed: true },
    ];
    // Act
    // Assert
    expect(calculateAverage(testAssignments)).toBe(72);
  });
  test("empty array returns 0", () => {
    const testAssignments: Assignment[] = [];
    expect(calculateAverage(testAssignments)).toBe(0);
  });
});
