import express, { Express } from "express";
import cors from "cors";
import graphql from "./controllers/graphql";

const app: Express = express();
app.use(cors());
app.use(graphql);

app.listen(8080, () => console.log("Server running on port :8080"));
