import React, { useState } from 'react';
import {BoardContainer} from './LayoutStyledComponents'
import Square from './Square';

const Board = props => {
  return (
    <BoardContainer>
      {props.boardState.map((squareValue, idx) => {
        return (
        <Square
          key={idx}
          handleClick={() => props.handleSquareClick(idx)}
        >
          {squareValue}
        </Square>)
      })}
    </BoardContainer>
  )
}


export default Board;