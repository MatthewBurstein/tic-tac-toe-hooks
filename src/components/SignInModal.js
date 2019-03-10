import React from 'react';
import { SignInModalContainer } from './LayoutStyledComponents'
import { PlayerDetailsInputContainer, TextInput, FormLabel } from './FormStyledComponents';
import PropTypes from 'prop-types';

const SignInModal = ({ open, handleSubmit }) => {
  return(
    <SignInModalContainer open={open}>
      <h2>Player Names</h2>
      <PlayerDetailsInputContainer>
        <FormLabel htmlFor="player-1-name">Player 1 name:</FormLabel>
        <TextInput id="player-1-name" type="text"/>
      </PlayerDetailsInputContainer>
      <PlayerDetailsInputContainer>
        <FormLabel htmlFor="player-2-name">Player 2 name:</FormLabel>
        <TextInput id="player-2-name" type="text"/>
      </PlayerDetailsInputContainer>
      <button onClick={() => handleSubmit}>Submit</button>
    </SignInModalContainer>
  )
}

SignInModal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

export default SignInModal;