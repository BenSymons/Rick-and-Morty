
import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Router } from "@reach/router"

// import { useQuery } from "@apollo/client"
// import { EPISODES } from "./utils/queries"

import EpisodeList from "../src/components/episodes"
import CharacterList from "../src/components/characters"
import LocationList from "../src/components/locations"
import ViewEpisode from "../src/components/view_episode"



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
          <CharacterList path="/characters" />
          <LocationList path="/locations" />
          <ViewEpisode path="/episode/:id"/>
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
