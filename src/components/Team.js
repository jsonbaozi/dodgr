import React from 'react';
import './Team.css';

import Player from './Player';

const Team = ({ players, teamName }) => (
  <div className="team-container">
    <div className={`${teamName.toLowerCase()} team-name`}>{teamName}</div>
    {players.length > 0 &&
      players.map(player => (
        <Player key={player.id} isLoading={false} playerDetails={player} />
      ))}
  </div>
);

export default Team;
