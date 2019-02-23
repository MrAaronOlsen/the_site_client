import React from 'react';

import ActionMenu from './ActionMenu.js'
import './navbar.scss';

export default class Navbar extends React.Component {

  render() {
    return(
      <div className='navbar'>
        <ActionMenu
          editMode={ this.props.editMode }
          toggleEditMode={ this.props.toggleEditMode }
          toggleImages={ this.props.toggleImages } />
      </div>
    )
  }
}