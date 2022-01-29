const { gql } = require("apollo-server-express");

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
    applyURI: String
    department: String
    position: String
  }

  type Auth {
    token: ID!
    profile: Profile
  }

  type Query {
    profiles: [Profile]!
    profile(profileId: ID!): Profile
    me: Profile
  }

  input saveJob {
    applyURI: String
    department: String
    position: String
  }

  type Mutation {
    addProfile(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): Auth
    login(email: String!, password: String!): Auth
    saveJob(input: saveJob!): Profile
  }
`;

module.exports = typeDefs;

// removeProfile: Profile
// removeJob(jobId: ID!): Profile
