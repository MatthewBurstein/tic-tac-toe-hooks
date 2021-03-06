import React from 'react';
import PlayersDetails from './PlayersDetails'
import { ControlsContainer } from './LayoutStyledComponents'

const Controls = ({ players, handleReset, winner }) => {
  return (
    <ControlsContainer>
      <PlayersDetails
        players={players}
        winner={winner}
      />
      <button onClick={handleReset}>
        Reset
      </button>
    </ControlsContainer>
  )
}

export default Controls;