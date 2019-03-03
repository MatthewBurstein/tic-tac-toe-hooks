import React, { useState } from 'react';
import {BoardContainer} from './LayoutStyledComponents'
import Square from './Square';

const initialState = Array(9).fill("");

const Board = () => {
  const [turn, setTurn] = useState("X")
  const [boardState, setState] = useState(initialState)

  const changeTurn = () => {
    if (turn === "X") { return setTurn("O") }
    if (turn === "O") { return setTurn("X") }
  }

  const handleClick = squareNumber => {
    const newState = Array.from(boardState)
    newState[squareNumber] = turn
    setState(newState)
    changeTurn()
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