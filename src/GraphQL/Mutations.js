/** @format */

import { gql } from "@apollo/client";

export const ADD_USER = gql`
	mutation add_UserInfo(
		$userEmail: String!
		$userFirstName: String!
		$userLastName: String!
		$userPassword: String!
		$userCompany: String!
		$userJobTitle: String!
	) {
		add_UserInfo(
			syncMode: NODE_LEDGERED
			input: {
				userEmail: $userEmail
				userFirstName: $userFirstName
				userLastName: $userLastName
				userPassword: $userPassword
				userCompany: $userCompany
				userJobTitle: $userJobTitle
			}
		) {
			transaction {
				version
				_id
			}
		}
	}
`;

export const DELETE_USER = gql`
	mutation remove_UserInfo($id: ID!) {
		remove_UserInfo(id: $id, syncMode: NODE_LEDGERED) {
			transaction {
				_id
			}
		}
	}
`;
