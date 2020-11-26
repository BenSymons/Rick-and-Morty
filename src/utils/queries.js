import { gql } from "@apollo/client"

// Episode queries

export const EPISODES = gql`
{
    query{episodes{
        results{
          name
        }
      }
      }
}`