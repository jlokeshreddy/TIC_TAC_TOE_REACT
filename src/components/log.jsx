const Logs = ({ turns }) => {
  console.log(turns, "hiiiiiiiiiiiiiiiiiiii");
  return (
    <ol id="log">
      {turns.map((turn) => {
        return (
          <li key={`${turn.square.row}${turn.square.col}`}>
            <p>
              {turn.player} Selected {turn.square.row} {turn.square.col}
            </p>
          </li>
        );
      })}
    </ol>
  );
};

export default Logs;
