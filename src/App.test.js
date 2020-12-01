import { render, screen } from '@testing-library/react';
import App from './App';
import EpisodeList from "../src/components/episodes"
import ReactDOM from "react-dom"
import { EPISODES } from "../src/utils/queries"
import {ApolloProvider, gql, useQuery} from "@apollo/client"
import { createRenderer } from 'react-dom/test-utils';
import { ApolloMockedProvider, ApolloProvider} from "@apollo/client"

const { loading, data } = useQuery(EPISODES, {
  variables: { page: "1", filter: {} }
})

it("renders without error", () => {
  createRenderer.create(
    <MockedProvider client = {client}>
      <EpisodeList />
    </MockedProvider>
  )
})


// test('renders without crashing', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
