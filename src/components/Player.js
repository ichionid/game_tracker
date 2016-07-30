import React, {PropTypes} from 'react';

const Player = (props) => {
  const handleChange = (e) => {
    props.togglePlayerState(props.name, e.target.value);
  };
  return (
    <button onClick={handleChange}>{props.player.number}</button>
  );
}

Player.propTypes = {
  player: PropTypes.object.isRequired,
  togglePlayerState: PropTypes.func.isRequired,
};

export default Player;
