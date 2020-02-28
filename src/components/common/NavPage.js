import React from 'react';

class NavPage extends React.PureComponent {
  render() {
    return (
      <div style={{ marginTop: '64px' }} className="p-5">
        {this.props.children}
      </div>
    )
  }
}

export default NavPage;
