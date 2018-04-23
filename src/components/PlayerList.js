import React from 'react';
import './PlayerList.css';

import Team from './Team';

const PlayerList = ({ isLoading, players }) => (
  <div className="player-list-container">
    <h1> Player List </h1>
    {isLoading && <p> Loading player details... </p>}
    {players.length > 0 && (
      <div className="player-list-teams">
        <Team players={players.slice(0, 5)} teamName="Radiant" />
        <Team players={players.slice(5)} teamName="Dire" />
      </div>
    )}
  </div>
);

export default PlayerList;
