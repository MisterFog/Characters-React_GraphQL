import { gql } from '@apollo/client';

export const GET_CHARACTERS = gql`
  query AllCharacters($page: Int, $filter: FilterCharacter) {
    characters(page: $page, filter: $filter) {
      results {
        id
        name
        image
        species
        type
        gender
        episode {
          id
          name
        }
      }
      info {
        count
        pages
        next
        prev
      }
    }
  }
`;

export const GET_CHARACTER = gql`
  query AllCharacter($id: ID!) {
    character(id: $id) {
      id
      name
      image
      species
      type
      gender
      episode {
        id
        name
      }
    }
  }
`;
