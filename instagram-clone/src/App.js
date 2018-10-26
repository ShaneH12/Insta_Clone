import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Post from './components/Post';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from "react-apollo";

// creates Apollo Client. URI is that of the GraphQL server.
const client = new ApolloClient({
  uri : "http://localhost:4000"
})

class App extends Component {
  render() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Header />
        <section className="App-main">
          <Post />
        </section>
      </div>
    </ApolloProvider>
  );
  }
};



export default App;
