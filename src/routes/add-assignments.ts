import express from "express";
import Assignment from "../models/Assignment";
import { createAssignment } from "../models/assignment-db";

const routes = express.Router();

routes.get("/add-assignments", (req, res) => {
  res.render("add-assignments");
});

routes.post("/assignment-submission", (req, res) => {
  const newAssignment: Assignment = {
    assignment: req.body.assignment,
    score: parseInt(req.body.score),
    total: parseInt(req.body.total),
    completed: !!req.body.completed,
  };
  createAssignment(newAssignment);
  // Not right to call this here: calculateAverage(assignments);
  res.render("assignment-submission", { newAssignment });
});

export default routes;
