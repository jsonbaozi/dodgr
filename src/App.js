import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import PlayerList from './components/PlayerList';

const examplePlayerData = [
  { name: 'I only dank virtual memes', id: 82605027 },
  { name: 'Lil Nick', id: 114585639 },
  { name: 'Naxelas', id: 58922738 },
  { name: 'ImNotASpy', id: 41649076 },
  { name: 'Squeebs', id: 101643832 },
  { name: 'Gofu', id: 257187 },
  { name: 'procarbine', id: 64745357 },
  { name: 'AwfulWaffLE', id: 64041417 },
  { name: '老司机带带我', id: 86760886 },
  { name: '109', id: 121187617 },
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Dodgr</h1>
        </header>
        <PlayerList isLoading={false} players={examplePlayerData} />
      </div>
    );
  }
}

export default App;
