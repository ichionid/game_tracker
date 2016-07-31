import React, {PropTypes} from 'react';

const Player = (props) => {
  const handleChange = () => {
    props.togglePlayerState(props.player.number);
  };
  return (
    <button className={(props.player.playing ? 'playing' : 'not-playing')} onClick={handleChange}>{props.player.number}</button>
  );
};

Player.propTypes = {
  player: PropTypes.object.isRequired,
  togglePlayerState: PropTypes.func.isRequired,
};

export default Player;
