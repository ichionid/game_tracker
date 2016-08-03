import React, {PropTypes} from 'react';
import Player from './Player';

const Team = (props) => {
  let playerButtons = [];
  let id=0;
  for (let player of props.gameData.players) {
    playerButtons.push(<Player key={id++} player={player} togglePlayerState={props.togglePlayerState}/>);
  }
  return (
    <div className="players">
      {playerButtons}
    </div>
  );
};

Team.propTypes = {
  togglePlayerState: PropTypes.func.isRequired,
  gameData: PropTypes.object.isRequired,
};

export default Team;
