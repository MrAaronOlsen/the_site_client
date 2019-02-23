import React from 'react';

import AboutDispatch from '../../about_edit/AboutDispatch.js'

import './edit_dispatch.scss';

// Handles dispatch of Editable Dispatch Views
export default class EditDispatch extends React.Component {

  render() {
    return(
      <div className='edit-dispatch'>
        <AboutDispatch editMode={ this.props.editMode } />
      </div>
    )
  }
}