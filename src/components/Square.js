import React from 'react';
import { SquareContainer, SquareContent } from './LayoutStyledComponents';

const Square = ({ handleClick, children }) => {
  return(
    <SquareContainer onClick={handleClick}>
      <SquareContent>
        <h1>{children}</h1>
      </SquareContent>
    </SquareContainer>
  )
}

export default Square;