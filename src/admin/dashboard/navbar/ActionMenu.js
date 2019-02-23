import React from 'react';

import ActionBtn from '../../../modules/ActionBtn.js'
import './action_menu.scss';

export default class ActionMenu extends React.Component {

  toggleModeText() {
    return this.props.editMode ? "Preview" : "Edit";
  }

  render() {
    return(
      <div className='action-menu'>
        <ActionBtn Text={ this.toggleModeText() } onClick={ this.props.toggleEditMode } />
        <ActionBtn Text='Images' onClick={ this.props.toggleImages } />
      </div>
    )
  }
}