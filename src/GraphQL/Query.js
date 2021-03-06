import { gql } from "@apollo/client";

export const ALL_USERS = gql`
  {
    list_UserInfoItems {
      _UserInfoItems {
        userFirstName
        userLastName
        userEmail
        userPassword
        _id
      }
    }
  }
`;

export const USER_INFO = gql`
  query blocksQuery($id: ID!) {
    get_UserInfo(id: $id) {
      documentsSent {
        documentsSentInfo {
          pdfName
          timeSent
          usersSentTo
        }
      }
      documentsToSign {
        documentsToSignInfo {
          fromWho
          isSigned
          pdfName
          nextToSend
          timeOfSend
        }
      }
      userCompany
      userEmail
      userFirstName
      userJobTitle
      userLastName
      userProfilePicture
    }
  }
`;

export const USER_INFO_BASIC = gql`
  query blocksQuery($id: ID!) {
    get_UserInfo(id: $id) {
      userCompany
      userEmail
      userFirstName
      userJobTitle
      userLastName
      userProfilePicture
    }
  }
`;

