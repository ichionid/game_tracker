import React, {PropTypes} from 'react';
import {Icon} from 'react-fa'

const ScoreBoard = (props) => {
  return (
    <div>
      <div className="column">
        <button className="plus-icon" onClick={props.increaseHomeScore}><Icon name="plus" /></button>
        <button className="minus-icon" onClick={props.decreaseHomeScore}><Icon name="minus" aria-hidden="true"/></button>
      </div>
      <div className="hometeam column"><span>{props.score.home}</span></div>
      <div className="awayteam column"><span>{props.score.away}</span></div>
      <div className="column">
        <button className="plus-icon" onClick={props.increaseAwayScore}><Icon name="plus" aria-hidden="true"/></button>
        <button className="minus-icon" onClick={props.decreaseAwayScore}><Icon name="minus" aria-hidden="true"/></button>
      </div>
    </div>
  );
};

ScoreBoard.propTypes = {
  score: PropTypes.object.isRequired,
  increaseHomeScore: PropTypes.func.isRequired,
  decreaseHomeScore: PropTypes.func.isRequired,
  increaseAwayScore: PropTypes.func.isRequired,
  decreaseAwayScore: PropTypes.func.isRequired,
};

export default ScoreBoard;
