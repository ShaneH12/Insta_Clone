import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Post from './components/Post';

/* Rendering built out components */
class App extends Component {
  render() {
    return <div className="App">
      <Header />
      <section className="App-main">
          <Post nickname="Bridget" avatar="https://www.laravelnigeria.com/img/chris.jpg" caption=": Moving the community!" image="https://pbs.twimg.com/media/DOXI0IEXkAAkokm.jpg" />
          <Post nickname="Shane" avatar="https://www.laravelnigeria.com/img/chris.jpg" caption=": Holding a mic" image="https://pbs.twimg.com/media/DOXI0IEXkAAkokm.jpg" />

                 {/* more posts */}
        </section>
      </div>;
  }
}

export default App;
