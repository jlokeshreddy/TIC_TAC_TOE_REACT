import { useState } from "react";

function Player({ name, symbol, isActivePlayer, updateName }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name)
  const EditUser = () => {
    setIsEditing((isEditing) => !isEditing);
    updateName(symbol,playerName)
    
  };

  const UpdatePlayerName = (event) => [
    setPlayerName(event.target.value)
  ]
  return (
    <li className= {isActivePlayer ? 'active': undefined}>
      <span className="player">
        {!isEditing && <span className="player-name">{playerName}</span>}
        {isEditing && (
          <input type="text" placeholder="Enter player name" required value={playerName} onChange={UpdatePlayerName}></input>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={() => EditUser()}>{isEditing ? "Save": "Edit"}</button>
    </li>
  );
}

export default Player;
