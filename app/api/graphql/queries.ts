import { gql } from "@apollo/client";

export const Get_User = gql`
  query GetUser {
  getUser {
    id
    username
    password
    restaurantName
    city
    address
  }
}
`;
