import React from 'react';

import ImageHeader from './ImageHeader.js'
import ImageNodes from './ImageNodes.js'
import FilePondComponent from './FilePondComponent.js';

import './image-menu.scss'

export default class ImageMenu extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  handler(key, value) {
    this.setState({
      [key]: value
    })
  }

  selectImages() {
    var images = this.state.getSelected();
    this.props.selectImages(images)
  }

  disabled(action) {
    if (this.props[action] === undefined) {
      return false
    } else {
      return true
    }
  }

  render() {
    return(
      <div className='image-menu'>
        <ImageHeader
          disableSelect={ this.disabled('disableSelect') }
          selectImages={ this.selectImages.bind(this) }
          disableDelete={ this.disabled('disableDelete') }
          removeImages={ this.state.removeImages }
          closeWindow={ this.props.closeWindow } />

        <ImageNodes
          handler={ this.handler.bind(this) }
          preSelected={ this.props.preSelected }/>
        
        <FilePondComponent addImage={ this.state.addImage }/>
      </div>
    )
  }
}