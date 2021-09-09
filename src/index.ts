import express from "express";
import path from "path";
import homepageRoutes from "./routes/routes";
import addAssignmentRoutes from "./routes/add-assignments";
import apiRoutes from "./routes/API-routes";
import deleteAssignmentRoutes from "./routes/delete-assignment";

const app = express();

// Setting up API
app.use(express.json());

// Settings for web server
app.use(express.urlencoded({ extended: false }));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
app.use(express.static(path.join(__dirname, "public")));

// TODO Add routes here.
app.use("/", homepageRoutes);
app.use("/", addAssignmentRoutes);
app.use("/", apiRoutes);
app.use("/", deleteAssignmentRoutes);

const port = 3001;
app.listen(port, () => console.log(`Listening on port: ${port}.`));

// Keep this line. It is added for our testing purposes.
export default app;
