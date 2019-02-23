import React from 'react';

import ActionBtn from '../../../modules/ActionBtn.js'

export default class ImageHeader extends React.Component {

  getSelect() {
    if (this.props.disableSelect) {
      return null
    } else {
      return <ActionBtn Text='Select' onClick={this.props.selectImages} />
    }
  }

  getDelete() {
    if (this.props.disableDelete) {
      return null
    } else {
      return <ActionBtn Text='Delete' onClick={this.props.removeImages} />
    }
  }

  render() {
    return(
      <div className='image-header'>
        <div className='image-header-section'>
          <ActionBtn Text='Close' onClick={this.props.closeWindow} />
          { this.getSelect() }
        </div>
        <div className='image-header-section'>
          { this.getDelete() }
        </div>
      </div>
    )
  }
}