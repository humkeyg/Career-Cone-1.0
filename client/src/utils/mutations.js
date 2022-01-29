import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      profile {
        _id
      }
    }
  }
`;

export const ADD_PROFILE = gql`
  mutation addProfile(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addProfile(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      profile {
        _id
      }
    }
  }
`;

export const SAVE_JOB = gql`
  mutation saveJob($input: savedJob!) {
    saveJob: (input: $input) {
      _id
      firstName
      lastName
      email
      savedJobs {
        _id
        applyURI
        department
        position
      }
    }
  } 
`;
