import { gql } from "@apollo/client"

// Episode queries

export const EPISODES = gql`
query{episodes{
  results{
    name
    air_date
    id
  }
}
}
`

export const EPISODE = gql`
query getepisode ($id:ID!) {
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
query{characters{
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
