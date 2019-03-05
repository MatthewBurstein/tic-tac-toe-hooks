import React, { useState, useEffect } from 'react';
import evaluateBoard from '../logic/evaluateBoard'
import Board from './Board';
import WinnerDetails from './WinnerDetails';

const initialBoardState = Array(9).fill("");

const Game = () => {
  const [turn, setTurn] = useState("X")
  const [boardState, setState] = useState(initialBoardState)
  const [winner, setWinner] = useState([])

  const changeTurn = () => {
    if (turn === "X") { return setTurn("O") }
    if (turn === "O") { return setTurn("X") }
  }

  useEffect(() => {
    setWinner(evaluateBoard(boardState))  
  }, boardState)

  const handleSquareClick = squareNumber => {
    if (boardState[squareNumber] !== "") { return }
    const newState = Array.from(boardState)
    newState[squareNumber] = turn
    setState(newState)
    changeTurn()
  }

  return(
    <>
      <Board 
        handleSquareClick={handleSquareClick}
        boardState={boardState}
      />
      {winner.length !== 0 &&
        <WinnerDetails 
          winner={winner}
        />
      }
    </>
  )
}

export default Game;