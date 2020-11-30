import { gql } from "@apollo/client"

export const EPISODES = gql`
query get_episodes ($page: Int!, $filter: FilterEpisode) {
  episodes (page: $page, filter: $filter) {
    info{
      pages
    }
    results{
      name
      air_date
      id
    }
}
}
`

export const EPISODE = gql`
query get_episode ($id:ID!) {
  episode(id: $id){
  name
  air_date
  characters{
    name
    status
    species
    image
  }
}
}`


// Characters query

export const CHARACTERS = gql`
query get_characters ($page: Int!, $filter: FilterCharacter){
  characters(page: $page, filter: $filter){
  info{
    pages
  }
  results{
    name
    status
    species
    image
    location{
      name
    }
  }
}
}
`

// Locations query

export const LOCATIONS = gql`
query{locations{
  info{
    pages
  }
  results{
    name
  }
}
}`
