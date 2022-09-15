import { buildSchema } from "graphql";
import { GraphQLSchema } from "graphql";
import * as auth from "./auth";
import * as event from "./event";
import * as user from "./user";

const types: Array<string> = [];
const queries: Array<string> = [];
const mutations: Array<string> = [];

const schemas = [auth, event, user];

schemas.forEach((e) => {
  types.push(e.types);
  queries.push(e.queries);
  mutations.push(e.mutations);
});

const schema: GraphQLSchema = buildSchema(`
    ${types.join("\n")}

    type Query {
        ${queries.join("\n")}
    }

    type Mutation {
        ${mutations.join("\n")}
    }
`);

export default schema;
