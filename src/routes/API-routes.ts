import express from "express";
import Assignment from "../models/Assignment";
import { assignments } from "../models/assignment-db";
import { calculateAverage } from "../models/calculateAverage";

const routes = express.Router();

routes.get("/api/assignments", (req, res) => {
  res.json(assignments);
  res.status(200);
});

const summary: Object[] = [
  {
    overallAverage: calculateAverage(assignments),
    assignments: assignments,
  },
];
console.log(summary);
routes.get("/api/summary", (req, res) => {
  res.json(summary);
  res.status(200);
});
export default routes;
