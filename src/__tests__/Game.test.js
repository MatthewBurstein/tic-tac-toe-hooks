import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Game from '../components/Game';

afterEach(cleanup)

const modalHeadingText = "Player Names"

test("on first load asks for sign in names", () => {
  const { getByText } = render(<Game />)
  
  expect(getByText(modalHeadingText)).toBeVisible();
})

test("accepts player names and starts game", () => {
  const { getByLabelText, getByText, getByTestId } = render(<Game />)
  
  const player1Name = "Sarah Connor";
  const player2Name = "Ellen Ripley";

  const player1NameField = getByLabelText("Player 1 name:");
  const player2NameField = getByLabelText("Player 2 name:");

  fireEvent.change(player1NameField, { target: { value: player1Name }})
  fireEvent.change(player2NameField, { target: { value: player2Name }})

  fireEvent.click(getByText("Submit"))
  
  expect(getByTestId("player-1-name")).toHaveTextContent(player1Name)
  expect(getByTestId("player-2-name")).toHaveTextContent(player2Name)

  expect(getByText(modalHeadingText)).not.toBeVisible()
  
})