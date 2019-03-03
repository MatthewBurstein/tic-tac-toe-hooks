import React, { useState } from 'react';
import {BoardContainer} from './LayoutStyledComponents'
import Square from './Square';

const initialState = Array(9).fill("");

const Board = () => {
  const [boardState, setState] = useState(initialState)

  const handleClick = squareNumber => {
    console.log("in here")
    const newState = Array.from(boardState);
    newState[squareNumber] = "X"
    setState(newState)
  }

  return (
    <BoardContainer>
      {boardState.map((squareValue, idx) => {
        return (
        <Square
          key={idx}
          handleClick={() => handleClick(idx)}
        >
          {squareValue}
        </Square>)
      })}
    </BoardContainer>)
}


export default Board;