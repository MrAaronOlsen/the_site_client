import React from 'react';

import Navbar from './navbar/Navbar.js'
import EditDispatch from './edit_window/EditDispatch.js'
import ImageMenu from './image_menu/ImageMenu.js'

import './dashboard.scss';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      editMode: true,
      showImageMenu: false
    }
  }

  toggleEditMode() {
    this.setState({
      editMode: !this.state.editMode
    })
  }

  toggleImages() {
    this.setState({
      showImageMenu: !this.state.showImageMenu
    })
  }

  imageMenu() {
    if (this.state.showImageMenu) {
      return <ImageMenu
        closeWindow={ this.toggleImages.bind(this) }
        disableSelect={ true } />
    }
  }

  render() {
    return(
      <div className='dashboard'>
        <Navbar
          editMode={ this.state.editMode }
          toggleEditMode={ this.toggleEditMode.bind(this) }
          toggleImages={ this.toggleImages.bind(this) } />

        <EditDispatch editMode={ this.state.editMode } />

        { this.imageMenu() }
      </div>
    )
  }
}