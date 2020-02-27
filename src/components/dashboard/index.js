import React from 'react';
import NavPage from '../common/NavPage';

import { getDogs } from '../../actions/characters';

class Dashboard extends React.PureComponent {
  render() {
    const handleClick = () => {
      console.log('yeah');
      getDogs();
    }

    return (
      <NavPage>
        <button onClick={() => handleClick()}>Dashboard</button>
      </NavPage>
    )
  }
}

export default Dashboard;
