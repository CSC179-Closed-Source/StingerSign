import { gql } from "@apollo/client";

export const ADD_NEW_USER = gql`
  mutation add_UserInfo_async(
    $userEmail: String!
    $userFirstName: String!
    $userLastName: String!
    $userPassword: String!
  ) {
    add_UserInfo_async(
      input: {
        userEmail: $userEmail
        userFirstName: $userFirstName
        userLastName: $userLastName
        userPassword: $userPassword
      }
    ) {
      result {
        _id
      }
    }
  }
`;
