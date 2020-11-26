
import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';


function App() {
  const client = new ApolloClient({
    uri: 'https://rickandmortyapi.com/graphql/',
    cache: new InMemoryCache(),
  });
  return (
    <ApolloProvider client={client}>
    <div className="App">
      <header className="App-header">
        <p>
          Stuff goes here
        </p>
      </header>
    </div>
    </ApolloProvider>
  );
}

export default App;
