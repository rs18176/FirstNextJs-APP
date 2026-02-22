import { gql } from "@apollo/client";

export const Create_User = gql`
mutation CreateUser($input: CreateUserInput) {
  createUser(input: $input) {
    id
    username
    password
    restaurantName
    city
    address
  }
}`;

