import React from 'react';
import { SquareContainer, SquareContent } from './LayoutStyledComponents';

const Square = ({ isWinner, handleClick, children }) => {
  return(
    <SquareContainer onClick={handleClick} isWinner={isWinner}>
      <SquareContent>
        <h1>{children}</h1>
      </SquareContent>
    </SquareContainer>
  )
}

export default Square;