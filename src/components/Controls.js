import React from 'react';
import WinnerDetails from './WinnerDetails'

const Controls = ({ handleReset, winner }) => {
  return (
    <>
      {winner.length > 0 &&
        <WinnerDetails
          winner={winner[0].winner}
        />
      }
      <button onClick={handleReset}>
        Reset
      </button>
    </>
  )
}

export default Controls;