import React from 'react';
import {BoardContainer} from './LayoutStyledComponents'
import Square from './Square';

const Board = ({ boardState, winningSquares, handleSquareClick }) => {
  return (
    <BoardContainer>
      {boardState.map((squareValue, idx) => {
        return (
        <Square
          key={idx}
          isWinner={winningSquares.find(winninSquare => winninSquare === idx)}
          handleClick={() => handleSquareClick(idx)}
        >
          {squareValue}
        </Square>)
      })}
    </BoardContainer>
  )
}


export default Board;