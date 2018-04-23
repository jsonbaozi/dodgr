import React from 'react';
import './Player.css';

const Player = ({ playerDetails }) => (
  <div className="player">
    {playerDetails.name !== undefined && (
      <div className="player-details">
        <span className="player-name"> {playerDetails.name} </span>
        <span className="player-id"> {playerDetails.id} </span>
      </div>
    )}
  </div>
);

export default Player;
