import React, { useState, useEffect } from 'react';
import evaluateBoard from '../logic/evaluateBoard'
import Board from './Board';
import Controls from './Controls';
import SignInModal from './SignInModal';


const initialBoardState = Array(9).fill("");

const Game = () => {
  const [turn, setTurn] = useState("X")
  const [boardState, setState] = useState(initialBoardState)
  const [winner, setWinner] = useState([])
  const [modalOpen, setModalOpen] = useState(true)
  const [players, setPlayers] = useState({ player1: '', player2: '' })

  const changeTurn = () => {
    if (turn === "X") { return setTurn("O") }
    if (turn === "O") { return setTurn("X") }
  }

  useEffect(() => {
    setWinner(evaluateBoard(boardState))  
  }, boardState)

  const handleSquareClick = squareNumber => {
    if (boardState[squareNumber] !== "" || winner.length) { return }
    const newState = Array.from(boardState)
    newState[squareNumber] = turn
    setState(newState)
    changeTurn()
  }

  const handleReset = () => {
    setState(initialBoardState)
  }

  const handleSubmitPlayers = ({ player1Name, player2Name }) => {
    setModalOpen(false)
    setPlayers({
      player1: player1Name,
      player2: player2Name
    })
  }

  return(
    <>
      <Board 
        handleSquareClick={handleSquareClick}
        boardState={boardState}
      />
      <Controls
        players={players}
        winner={winner}
        handleReset={handleReset}
      />
      <SignInModal
        open={modalOpen}
        handleSubmit={handleSubmitPlayers}
      />
    </>
  )
}

export default Game;