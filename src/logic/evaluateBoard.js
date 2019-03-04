const evaluateBoard = board => {
  const rows = [board.slice(0,3), board.slice(3, 6), board.slice(6, 9)]
  const winners = []
  const rowWinners = evaluateRows(rows)
  const columnWinners = evaluateColumns(rows)
  const diagonalWinners = evaluateDiagonals(rows)
  return [rowWinners, columnWinners, diagonalWinners].filter(winners => !!winners)
}

const evaluateRows = rows => {
  let output
  rows.forEach((row, idx) => {
    if (row.every(el => el === row[0])) {
      output = {
        winner: row[0],
        type: "row",
        position: idx
      }
    }
  })
  return output
}

const evaluateColumns = rows => {
  let output
  rows.forEach((_, idx) => {
    const column = rows.map(row => row[idx])
    if (column.every(el => el === column[0])) {
      output = {
        winner: column[0],
        type: "column",
        position: idx
      }
    }
  })
  return output
}

const evaluateDiagonals = rows => {
  if (rows.map((row, idx) => row[idx]).every(square => square === rows[0][0])) {
    return {
      winner: rows[0][0],
      type: "diagonal",
      position: "backward"
    }
  }
  
  if (rows[0][2] === rows[1][1] && rows[2][0] === rows[1][1]) {
    return {
      winner: rows[0][2],
      type: "diagonal",
      position: "forward"
    }
  }
}

export default evaluateBoard;