import React from 'react';
import './PlayerList.css';

import Player from './Player';

const PlayerList = ({ isLoading, players }) => (
  <div className="player-list-container">
    <h1> Player List </h1>
    {isLoading && <p> Loading player details... </p>}
    {players.length > 0 && (
      <div className="player-list-list">
        RADIANT
        {players
          .slice(0, 5)
          .map(player => (
            <Player key={player.id} isLoading={false} playerDetails={player} />
          ))}
        DIRE
        {players
          .slice(5)
          .map(player => (
            <Player key={player.id} isLoading={false} playerDetails={player} />
          ))}
      </div>
    )}
  </div>
);

export default PlayerList;
