import React from 'react';

import AboutEdit from './about_edit/AboutEdit.js'
import AboutView from '../../views/about/AboutView.js'

export default class AboutDispatch extends React.Component {

  dispatchPage() {
    if (this.props.editMode) {
      return <AboutEdit />
    } else {
      return <AboutView />
    }
  }

  render() {
    return(
      this.dispatchPage()
    )
  }
}