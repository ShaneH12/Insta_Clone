import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Post from './components/Post';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from "react-apollo";
import Pusher from 'pusher-js';
import Posts from "./components/Posts";

// creates Apollo Client. URI is that of the GraphQL server.
const client = new ApolloClient({
  uri : "http://localhost:4000"
});

class App extends Component{
  constructor(){
    super();
    // connect to pusher
    this.pusher = new Pusher("30d8f0ab55b75b6b31b9", {
      cluster: "eu",
      encrypted: true
    });
  }

  componentDidMount(){
    if ('actions' in Notification.prototype) {
      console.log('You can enjoy notification feature');
    } else {
      console.log('Sorry notifications are NOT supported on your browser');
    }
  }
  render(){
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <Header />
          <section className="App-main">
            {/* pass the pusher object to the posts component */}
            <Posts pusher={this.pusher} apollo_client={client}/>
          </section>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
