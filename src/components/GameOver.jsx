export default function GameOver({ winner,name, onReset }) {
  return (
    <div id="game-over">
      <h2>Game Over</h2>
      {winner && <p>{winner} {name} Won!</p>}
      {!winner && <p>It's Draw Match!</p>}
      <p>
        <button onClick={onReset}>Rematch</button>
      </p>
    </div>
  );
}
