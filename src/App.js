
import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Router } from "@reach/router"

import { useQuery } from "@apollo/client"
import { EPISODES } from "./utils/queries"

import EpisodeList from "../src/components/episodes"



function App() {
  const client = new ApolloClient({
    uri: 'https://rickandmortyapi.com/graphql/',
    cache: new InMemoryCache(),
  });
  return (
    <ApolloProvider client={client}>
    <div className="App">
      <header className="App-header">
        <Router>
          <EpisodeList path="/episodes" />
          {/* <Characters path="/characters" />
          <Locations path="/locations" /> */}
        </Router>
        <p>
          Stuff goes here
        </p>
      </header>
    </div>
    </ApolloProvider>
  );
}

export default App;
