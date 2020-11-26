import { gql } from "@apollo/client"

// Episodes query

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

// Characters query

export const CHARACTERS = gql`
query{characters{
  results{
    name
    status
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
