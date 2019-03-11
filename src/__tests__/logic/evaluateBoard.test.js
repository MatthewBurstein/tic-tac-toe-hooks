import evaluateBoard from "../../logic/evaluateBoard"

test("evaluateBoard determines a winner in a row", () => {
  const boardWithRowVictory = [
    "", "X", "O", 
    "O", "O", "O", 
    "X", "X", ""]
  const expected = [3, 4, 5]
  expect(evaluateBoard(boardWithRowVictory)).toEqual(expected)
})

test("evaluateBoard determines a winner in a column", () => {
  const boardWithColumnVictory = [
    "X", "O", "O", 
    "X", "X", "O", 
    "O", "X", "O"
  ]
  const expected = [2, 5, 8]
  expect(evaluateBoard(boardWithColumnVictory)).toEqual(expected)
})

test("evaluateBoard determines a winner in backward diagonal", () => {
  const boardWithColumnVictory = [
    "X", "O", "O", 
    "X", "X", "O", 
    "O", "X", "X"
  ]
  const expected = [0, 4, 8]
  expect(evaluateBoard(boardWithColumnVictory)).toEqual(expected)
})

test("evaluateBoard determines a winner in forward diagonal", () => {
  const boardWithColumnVictory = [
    "O", "X", "X", 
    "X", "X", "O", 
    "X", "O", "O"
  ]
  const expected = [2, 4, 6]
  expect(evaluateBoard(boardWithColumnVictory)).toEqual(expected)
})

test("evaluateBoard returns all squares in winning lines", () => {
  const boardWithColumnVictory = [
    "O", "O", "X", 
    "X", "X", "X", 
    "O", "O", "X"
  ]
  const expected = [2, 3, 4, 5, 8]
  expect(evaluateBoard(boardWithColumnVictory)).toEqual(expected)
})