import React, { useState } from 'react';
import { SignInModalContainer } from './LayoutStyledComponents'
import { PlayerDetailsInputContainer, TextInput, FormLabel } from './FormStyledComponents';
import PropTypes from 'prop-types';

const SignInModal = ({ open, handleSubmit }) => {
  const [player1Name, setPlayer1Name] = useState("")
  const [player2Name, setPlayer2Name] = useState("")
  
  return(
    <SignInModalContainer open={open}>
      <form>
        <legend>Player Names</legend>
        <PlayerDetailsInputContainer>
          <FormLabel htmlFor="player-1-name">Player 1 name:</FormLabel>
          <TextInput 
            id="player-1-name" 
            type="text" 
            value={player1Name}
            onChange={e => setPlayer1Name(e.target.value)}
          />
        </PlayerDetailsInputContainer>
        <PlayerDetailsInputContainer>
          <FormLabel htmlFor="player-2-name">Player 2 name:</FormLabel>
          <TextInput 
            id="player-2-name"
            type="text"
            value={player2Name}
            onChange={e => setPlayer2Name(e.target.value)}
          />
        </PlayerDetailsInputContainer>
        <button 
          onClick={e => {e.preventDefault(); handleSubmit({ player1Name, player2Name })}}
        >
          Submit
        </button>
      </form>
    </SignInModalContainer>
  )
}

SignInModal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

export default SignInModal;