import { useState } from "react";
import Player from "./components/player";
import GameBoard from "./components/GameBoard";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");
  const [turns, setTurns] = useState([]);

  const togglePlayer = (rowIndex,colIndex) => {
    setActivePlayer((prevPlayer) => {
      return prevPlayer === "X" ? "O" : "X";
    });

    setTurns((prevTurns) => {
      let currentPlayer = "X";
      if (turns.length > 0 && prevTurns[0].player === "X") {
        currentPlayer = "O";
      }
      console.log(colIndex, rowIndex, 'toggleplayer')
      const currentTurn = {
        square: { col: colIndex, row: rowIndex },
        player: currentPlayer,
      };
      console.log(prevTurns, 'oldturns')
      return [currentTurn, ...prevTurns]
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
          />
          <Player
            name="Stranger"
            symbol="O"
            isActivePlayer={activePlayer === "O"}
          />
        </ol>
        <GameBoard
          selectActivePlayer={togglePlayer}
          turns = {turns}
        />
      </div>
      LOG
    </main>
  );
}

export default App;
