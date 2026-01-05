import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const GameBoard = ({ selectActivePlayer, turns }) => {
  const gameBoard = initialGameBoard;
console.log(turns, 'turns')
  for (const turn of turns) {
    const { square, player } = turn;
    const { col, row } = square;
    console.log(col, row, 'ooooooooooo')
    gameBoard[row][col] = player;
    console.log(gameBoard, 'gameboard')
  }

  // const [gameBoard, setGameBoard] = useState(initialGameBoard);

  // const handelGameBoard = (rowIndex, colIndex) => {
  //   setGameBoard((prevGameBoard) => {
  //     const updatedGameBoard = [...prevGameBoard.map((row) => [...row])];
  //     updatedGameBoard[rowIndex][colIndex] = activePlayerSymbol;
  //     return updatedGameBoard;
  //   });
  //   selectActivePlayer()
  // };
  return (
    <ol id="game-board">
      {gameBoard &&
        gameBoard.map((row, rowIndex) => (
          <li key={rowIndex}>
            <ol>
              {row &&
                row.map((playerSymbol, colIndex) => (
                  <li key={colIndex}>
                    <button
                      onClick={() => selectActivePlayer(rowIndex, colIndex)}
                    >
                      {playerSymbol}
                    </button>
                  </li>
                ))}
            </ol>
          </li>
        ))}
    </ol>
  );
};

export default GameBoard;
