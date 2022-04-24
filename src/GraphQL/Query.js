import { gql } from "@apollo/client";

export const FIRST_AND_LAST_NAMES = gql`
  query blocksQuery {
    list_UserInfoItems {
      _UserInfoItems {
        userFirstName
        userLastName
      }
    }
  }
`;

export const EMAIL_AND_PASSWORD = gql`
  query blocksQuery {
    list_UserInfoItems {
      _UserInfoItems {
        userEmail
        userPassword
      }
    }
  }
`;
