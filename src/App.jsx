import { useState } from "react";
import Player from "./components/player";
import GameBoard from "./components/GameBoard";
import Logs from "./components/log";
import GameOver from "./components/GameOver";
import { WINNING_COMBINATIONS } from "./utils/WinningCombinations";

const derivePlayer = (gameTurns) => {
  let currentPlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }

  return currentPlayer;
};

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function App() {
  //const [activePlayer, setActivePlayer] = useState("X");
  const [playerName, setPlayerName] = useState({
    X: "Lupin",
    O: "Stranger",
  });
  const [turns, setTurns] = useState([]);
  const activePlayer = derivePlayer(turns);

  const gameBoard = [...initialGameBoard.map((array) => [...array])];
  console.log(turns, "turns");
  for (const turn of turns) {
    const { square, player } = turn;
    const { col, row } = square;
    //console.log(col, row, 'ooooooooooo')
    gameBoard[row][col] = player;
    //console.log(gameBoard, 'gameboard')
  }

  const UpdatePlayerName = (symbol, playerName) => {
    setPlayerName((prevPlayerName) => {
      return {
        ...prevPlayerName,
        [symbol]: playerName,
      };
    });
    console.log(symbol, playerName, 'from update')
  };

  let winner;
  for (const combination of WINNING_COMBINATIONS) {
    let firstSquareSymbol =
      gameBoard[combination[0].row][combination[0].column];
    let secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].column];
    let thirdSquareSymbol =
      gameBoard[combination[2].row][combination[2].column];
    console.log(firstSquareSymbol, secondSquareSymbol, thirdSquareSymbol);
    if (
      firstSquareSymbol == secondSquareSymbol &&
      secondSquareSymbol === thirdSquareSymbol
    ) {
      winner = firstSquareSymbol;
    }
  }

  const hasDraw = turns.length === 9 && !winner ? true : false;

  const handelReset = () => {
    setTurns([]);
  };

  const togglePlayer = (rowIndex, colIndex) => {
    // setActivePlayer((prevPlayer) => {
    //   return prevPlayer === "X" ? "O" : "X";
    // });

    setTurns((prevTurns) => {
      // let currentPlayer = "X";
      // if (turns.length > 0 && prevTurns[0].player === "X") {
      //   currentPlayer = "O";
      // }
      // console.log(colIndex, rowIndex, "toggleplayer");
      const currentTurn = {
        square: { col: colIndex, row: rowIndex },
        player: activePlayer,
      };
      console.log(prevTurns, "oldturns");
      return [currentTurn, ...prevTurns];
    });
  };

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            name="Lupin"
            symbol="X"
            isActivePlayer={activePlayer === "X"}
            updateName = {UpdatePlayerName}
          />
          <Player
            name="Stranger"
            symbol="O"
            isActivePlayer={activePlayer === "O"}
             updateName = {UpdatePlayerName}
          />
        </ol>
        {(winner || hasDraw) && (
          <GameOver winner={winner} name = {playerName[winner]} onReset={handelReset} />
        )}
        <GameBoard selectActivePlayer={togglePlayer} board={gameBoard} />
      </div>
      <Logs turns={turns} />
    </main>
  );
}

export default App;
