import React from 'react';
import WinnerDetails from './WinnerDetails'
import { ControlsContainer } from './LayoutStyledComponents'

const Controls = ({ handleReset, winner }) => {
  return (
    <ControlsContainer>
      <WinnerDetails
        winner={winner[0]}
      />
      <button onClick={handleReset}>
        Reset
      </button>
    </ControlsContainer>
  )
}

export default Controls;