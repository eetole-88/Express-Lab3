import express from "express";
import { assignmentId, deleteAssignment } from "../models/assignment-db";

const routes = express.Router();
routes.get("/delete-assignment", (req, res) => {
  res.render("delete-assignment");
});
routes.get("/:id/delete-assignment", (req, res) => {
  const id = parseInt(req.params.id);
  const deletion = assignmentId(id);
  if (deletion) {
    deleteAssignment(id);
    res.render("delete-assignment", { assignment: deletion.assignment });
  } else {
    res.status(404).render("error/not-found");
  }
});

export default routes;
