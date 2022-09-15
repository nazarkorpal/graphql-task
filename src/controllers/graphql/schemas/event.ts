export const types: string = `
    type Event {
        id: ID!
        title: String!
        description: String!
        price: Int
        capacity: Int
    }
`;

export const queries: string = `
    getEvent(id: ID!): Event
    getEvents: [Event]
`;

export const mutations: string = ``;
