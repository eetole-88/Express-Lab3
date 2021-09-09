import express from "express";
import { assignments } from "../models/assignment-db";
import { calculateAverage } from "../models/calculateAverage";

const routes = express.Router();

routes.get("/", (req, res) => {
  const average = calculateAverage(assignments).toFixed(1);
  res.render("homepage", { assignments, average });
});

export default routes;
