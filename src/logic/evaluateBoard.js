const evaluateBoard = board => {
  const rowWinners = evaluateRows(board)
  const columnWinners = evaluateColumns(board)
  const diagonalWinners = evaluateDiagonals(board)
  return getUniquevalues([...rowWinners, ...columnWinners, ...diagonalWinners]).sort()
}

const evaluateRows = board => {
  return (
    isWinningSet([0, 1, 2], board) ||
    isWinningSet([3, 4, 5], board) ||
    isWinningSet([6, 7, 8], board) ||
    []
  )
}

const evaluateColumns = board => {
  return(
    isWinningSet([0 ,3 ,6], board) ||
    isWinningSet([1, 4, 7], board) ||
    isWinningSet([2, 5, 8], board) ||
    []
  )
}

const evaluateDiagonals = board => {
  return(
    isWinningSet([0, 4, 8], board) ||
    isWinningSet([2, 4, 6], board) ||
    []
  )
}

const isWinningSet = (squares, board) => {
  if (
    board[squares[0]] &&
    squares.every(square => board[square] === board[squares[0]])
  ) {
    return squares
  }
}

const getUniquevalues = arr => {
  return arr.reduce((acc, current) => {
    if (!acc.find(el => el === current)) { acc.push(current) }
    return acc
  }, [])
}

export default evaluateBoard;