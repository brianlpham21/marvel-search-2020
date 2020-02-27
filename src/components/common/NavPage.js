import React from 'react';

class NavPage extends React.PureComponent {
  render() {
    return (
      <div style={{ marginTop: '64px' }}>
        {this.props.children}
      </div>
    )
  }
}

export default NavPage;
