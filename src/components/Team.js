import React, {PropTypes} from 'react';
import Player from './Player';

const Team = (props) => {
  console.log("Giannis");
  let gameData = props.gameData;
  console.log(gameData);
  let playerButtons = [];
  for (let player of gameData.players) {
    playerButtons.push(<Player player={player} togglePlayerState={props.togglePlayerState}/>);
  }
  return (
    <div>
      {playerButtons}
    </div>
  );
};

Team.propTypes = {
  togglePlayerState: PropTypes.func.required,
  gameData: PropTypes.array.required,
};

export default Team;
