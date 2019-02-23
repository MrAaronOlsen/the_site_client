import React from 'react';

import ActionBtn from '../../../modules/ActionBtn.js'

export default class AboutEditVersionHeader extends React.Component {

  render() {
    return(
      <div className="about-edit-version-header">
        <ActionBtn Text='Save' onClick={ this.props.save } />
      </div>
    )
  }
}