import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import CountdownTimer from 'react-timer';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/gameDataActions';
import Team from '../components/Team';

export const GameTrackerPage = (props) => {
  let OPTIONS = { prefix: 'seconds elapsed!', delay: 100}
 
  return (
    <div>
      <CountdownTimer options={OPTIONS} />

      <Team gameData={props.gameData} togglePlayerState={props.actions.togglePlayerState} />
    </div>
  );
};

GameTrackerPage.propTypes = {
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    gameData: state.gameData
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
