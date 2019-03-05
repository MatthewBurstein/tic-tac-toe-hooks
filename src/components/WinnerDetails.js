import React from 'react';

const WinnerDetails = (props) => {
  return (
    <div>
      The winner is {props.winner[0].winner}
    </div>
  )
}

export default WinnerDetails