export const types: string = `
    type User {
        id: ID!
        role: String!
        username: String!
        age: Int!
    }
`;

export const queries: string = `
    getUser(id: ID!): User
    getUsers: [User]
`;

export const mutations: string = ``;
