import React, { useState } from 'react';
import {BoardContainer} from './LayoutStyledComponents'
import Square from './Square';

const initialState = Array(9).fill("");

const Board = () => {
  const [boardState, setState] = useState(initialState)
  return (
    <BoardContainer>
      {boardState.map((squareValue) => {
        return (<Square>{squareValue}</Square>)
      })}
    </BoardContainer>)
}


export default Board;