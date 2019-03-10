import React from 'react';
import { WinnersDetailsContainer } from './LayoutStyledComponents';

const WinnerDetails = ({ winner }) => {
  return (
    <WinnersDetailsContainer>
      <p>Winner: {winner && winner.winner}</p>
    </WinnersDetailsContainer>
  )
}

export default WinnerDetails;