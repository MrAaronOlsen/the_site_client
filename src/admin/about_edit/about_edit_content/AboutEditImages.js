import React from 'react';

import ActionBtn from '../../../modules/ActionBtn.js'
import ImageMenu from '../../dashboard/image_menu/ImageMenu.js'

export default class AboutEditImages extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      toggleWindow: false
    }
  }

  toggleWindow() {
    this.setState({
      toggleWindow: !this.state.toggleWindow
    })
  }

  imageWindow() {
    if (this.state.toggleWindow) {
      return <ImageMenu
        closeWindow={ this.toggleWindow.bind(this) }
        selectImages={ this.props.saveImages.bind(this) }
        preSelected={ this.props.selectedImages }/>

    } else {
      return null;
    }
  }

  render() {

    return(
      <div>
        <ActionBtn Text='Images' onClick={ this.toggleWindow.bind(this) } width="100px" />
        { this.imageWindow() }
      </div>
    )
  }
}