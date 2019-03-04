import evaluateBoard from "../../logic/evaluateBoard"

test("evaluateBoard determines a winner in a row", () => {
  const boardWithRowVictory = [
    "", "X", "O", 
    "O", "O", "O", 
    "X", "X", ""]
  const expected = [{winner: "O", type: "row", position: 1}]
  expect(evaluateBoard(boardWithRowVictory)).toEqual(expected)
})

test("evaluateBoard determines a winner in a column", () => {
  const boardWithColumnVictory = [
    "X", "O", "O", 
    "X", "X", "O", 
    "O", "X", "O"
  ]
  const expected = [{winner: "O", type: "column", position: 2}]
  expect(evaluateBoard(boardWithColumnVictory)).toEqual(expected)
})

test("evaluateBoard determines a winner in backward diagonal", () => {
  const boardWithColumnVictory = [
    "X", "O", "O", 
    "X", "X", "O", 
    "O", "X", "X"
  ]
  const expected = [{winner: "X", type: "diagonal", position: "backward"}]
  expect(evaluateBoard(boardWithColumnVictory)).toEqual(expected)
})

test("evaluateBoard determines a winner in forward diagonal", () => {
  const boardWithColumnVictory = [
    "O", "X", "X", 
    "X", "X", "O", 
    "X", "O", "O"
  ]
  const expected = [{winner: "X", type: "diagonal", position: "forward"}]
  expect(evaluateBoard(boardWithColumnVictory)).toEqual(expected)
})