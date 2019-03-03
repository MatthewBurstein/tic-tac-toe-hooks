import React from 'react';
import { SquareContainer, SquareContent } from './LayoutStyledComponents';

const Square = (props) => {
  return(
    <SquareContainer>
      <SquareContent>
        <h1>{props.children}</h1>
      </SquareContent>
    </SquareContainer>
  )
}

export default Square;