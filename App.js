import React from 'react';
import Routes from './Routes';
import { AppRegistry } from 'react-native';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import {Provider} from 'react-redux';
import generateStore from './redux/store';
// Create the client as outlined in the setup guide


const client = new ApolloClient({
    uri: "https://rickandmortyapi.com/graphql",
    cache: new InMemoryCache()
});

let store = generateStore()

const App = () => (
  
  <ApolloProvider client={client}>
    <Provider  store={store} ><Routes/></Provider>
  </ApolloProvider>
);

AppRegistry.registerComponent('MyApplication', () => App);

export default App;
