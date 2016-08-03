import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import Countdown from 'react-cntdwn';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/gameDataActions';
import Team from '../components/Team';
import ScoreBoard from '../components/ScoreBoard';

export const GameTrackerPage = (props) => {
  let test=10;
  return (
    <div>
      <Countdown targetDate={new Date('August 29, 2017')}
        startDelay={2000}
        interval={1000}
        timeSeparator={':'}/>
                 <ScoreBoard
        score={props.gameData.score} 
        increaseHomeScore={props.actions.increaseHomeScore}
        decreaseHomeScore={props.actions.decreaseHomeScore}
        increaseAwayScore={props.actions.increaseAwayScore}
        decreaseAwayScore={props.actions.decreaseAwayScore}
      />
      <Team gameData={props.gameData} togglePlayerState={props.actions.togglePlayerState} />
    </div>
  );
};

GameTrackerPage.propTypes = {
  actions: PropTypes.object.isRequired,
};
function formatFunc(timeRemaining) {
  console(timeRemaining);
}
function mapStateToProps(state) {
  return {
    gameData: state.gameData,
    score: state.gameData.score
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameTrackerPage);
