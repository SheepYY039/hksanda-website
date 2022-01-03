import { gql } from "apollo-boost";
export const GET_RANKINGS = gql`
  query Query {
    getRankings {
      id
      name
      awardees
    }
  }
`;

export const ADD_PERSON_TO_RANK = gql`
  mutation Mutation($details: RankInput) {
    addPersonToRank(details: $details) {
      id
      name
      awardees
    }
  }
`;
