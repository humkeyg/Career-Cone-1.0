const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Profile {
    _id: ID!
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
