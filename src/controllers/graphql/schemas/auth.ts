export const types: string = `
    type Auth {
        token: String!
    }
`;

export const queries: string = ``;

export const mutations: string = `
    login(username: String!, password: String!): Auth
`;
