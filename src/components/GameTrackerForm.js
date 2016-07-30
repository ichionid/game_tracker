import React, {PropTypes} from 'react';

class GameTrackerForm extends React.Component {
  constructor(props, context) {
    super(props, context);
  
  }
  render() {
    return (
      <div>
        <h2>Game Tracker</h2>
          <table style="width:100%">
            <tr>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Age</th>
            </tr>
            <tr>
              <td>Jill</td>
              <td>Smith</td>
              <td>50</td>
            </tr>
            <tr>
              <td>Eve</td>
              <td>Jackson</td>
              <td>94</td>
            </tr>
            <tr>
              <td>John</td>
              <td>Doe</td>
              <td>80</td>
            </tr>
          </table>
        <hr/>
      </div>
    );
  }
}

GameTrackerForm.propTypes = {
  saveFuelSavings: PropTypes.func.isRequired,
  calculateFuelSavings: PropTypes.func.isRequired,
  fuelSavings: PropTypes.object.isRequired
};

export default GameTrackerForm;
