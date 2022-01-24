const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Profile {
    _id: ID
    firstName: String
    lastName: String
    email: String
    password: String
    savedJobs: [Job]
  }

  type Job {
    _id: ID!

  }

  type Auth {
    token: ID!
    profile: Profile
  }

  input savedJob {
    
  }

  type Query {
    profiles: [Profile]!
    profile(profileId: ID!): Profile
    # Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data
    me: Profile
  }

  type Mutation {
    addProfile(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    saveJob(input: savedJob!): Profile
    removeProfile: Profile
    removeJob(jobId: ID!): Profile
  }
`;

module.exports = typeDefs;
