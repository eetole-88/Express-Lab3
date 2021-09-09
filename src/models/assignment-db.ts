import Assignment from "./Assignment";

export const assignments: Assignment[] = [
  {
    id: 1,
    assignment: "Walrus Worksheet",
    score: 9,
    total: 10,
    completed: true,
  },
  {
    id: 2,
    assignment: "Jellyfish Project",
    score: 15,
    total: 15,
    completed: true,
  },
  {
    id: 3,
    assignment: "Dolphin Quiz",
    score: 8,
    total: 10,
    completed: true,
  },
  {
    id: 4,
    assignment: "Oceans Unit Test",
    score: 0,
    total: 25,
    completed: false,
  },
];

let nextId: number = 1;

export function createAssignment(assignment: Assignment): void {
  assignment.id = nextId++;
  assignments.push(assignment);
}
console.log(assignments);

export function assignmentId(id: number): Assignment | undefined {
  return assignments.find((assignment) => assignment.id === id);
}

export function deleteAssignment(id: number): boolean {
  const index = assignments.findIndex((assignment) => assignment.id === id);
  if (index == -1) {
    return false;
  } else {
    assignments.splice(index, 1);
    return true;
  }
}
