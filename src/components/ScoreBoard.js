import React, {PropTypes} from 'react';
import FontAwesome from 'react-fontawesome';

const ScoreBoard = (score) => {
  const handleChange = () => {
    props.togglePlayerState(score);
  };
  console.log(score);
  return (
    <div>
      <button className="plus-icon" onClick={increaseHomeScore}>+</button>
      <button className="minus-icon" onClick={decreaceHomerScore}>-</button>
      <div className="hometeam"><span>score.home</span></div>
      <div className="awayteam"><span>score.away</span></div>
      <button className="plus-icon" onClick={increaseHomeScore}>+</button>
      <button className="minus-icon" onClick={decreaceHomerScore}>-</button>
    </div>
  );
};

ScoreBoard.propTypes = {
  score: PropTypes.object.isRequired,
};

export default ScoreBoard;
