
import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Router } from "@reach/router"

// Components
import EpisodeList from "../src/components/episodes"
import CharacterList from "../src/components/characters"
import LocationList from "../src/components/locations"
import ViewEpisode from "../src/components/view_episode"
import Home from "../src/components/home"
import Nav from "../src/components/nav_bar"
import Footer from "../src/components/footer"


// App
function App() {
  const client = new ApolloClient({
    uri: 'https://rickandmortyapi.com/graphql/',
    cache: new InMemoryCache(),
  });
  return (
    <ApolloProvider client={client}>
    <div className="App">
      <header className="App-header">
        <Nav/>
        <Router>
          <Home path="/" />
          <EpisodeList path="/episodes" />
          <CharacterList path="/characters" />
          <LocationList path="/locations" />
          <ViewEpisode path="/episode/:id"/>
        </Router>
        <Footer/>
      </header>
    </div>
    </ApolloProvider>
  );
}

export default App;
