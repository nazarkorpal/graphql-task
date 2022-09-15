import express, { Router } from "express";
import { graphqlHTTP, Options } from "express-graphql";
import schema from "./schemas";
import root from "./handlers";

const router: Router = express.Router();

const options: Options = {
  graphiql: true,
  schema,
  rootValue: root,
};

router.use("/graphql", graphqlHTTP(options));

export default router;
