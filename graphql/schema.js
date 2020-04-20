const {buildSchema} = require('graphql');

module.exports = buildSchema(`
    type User {
        name: String!
        age: Int!
    }

    type TestType {
        count: Int!
        users: [User!]!
    }

    input UserInput {
        name: String!
    }
    
    type Todo {
        id: ID!
        title: String!
        done: Boolean!
        createdAt: String
        updatedAt: String
    }
    
    type Query {
        test: TestType!
        random(min: Int!, max: Int!, count: Int!): [Float!]!
        getTodos: [Todo!]!
    }
    
    input TodoInput {
        title: String
    }
    
    type Mutation {
        addUser(user: UserInput!): User!
        addTodo(todo: TodoInput!): Todo!
        changeTodo(id: ID!, done: Boolean!): Todo!
        deleteTodo(id: ID!): Boolean!
    }
`);
