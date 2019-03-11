import React from 'react';
import { PlayersDetailsContainer } from './LayoutStyledComponents';

const PlayersDetails = ({ players, winner }) => {
  return (
    <PlayersDetailsContainer>
      <p data-testid="player-1-name">Player 1: {players.x}</p>
      <p data-testid="player-2-name">Player 2: {players.o}</p>
      <p>Winner: {winner && winner.winner}</p>
    </PlayersDetailsContainer>
  )
}

export default PlayersDetails;