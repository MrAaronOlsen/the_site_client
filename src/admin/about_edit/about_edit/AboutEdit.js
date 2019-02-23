import React from 'react';

import AboutEditOptions from '../about_edit_options/AboutEditOptions.js'
import AboutEditContent from '../about_edit_content/AboutEditContent.js';
import AboutEditVersion from '../about_edit_version/AboutEditVersion.js';

import './about_edit.scss'

const pages = {
  editContent: 'editContent',
  editVersion: 'editVersion'
}

export default class AboutEdit extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentPage: null
    }

    this.pages = {
      [pages.editVersion]: this.pageEditVersion.bind(this),
      [pages.editContent]: this.pageEditContent.bind(this)
    }
  }

  stateHandler(key, value) {
    this.setState({
      [key]: value
    })
  }

  getCurrentPage() {
    var currentPage = this.pages[this.state.currentPage];

    if (currentPage !== undefined) {
      return currentPage.call()
    } else {
      return null;
    }
  }

  pageEditContent() {
    return <AboutEditContent />
  }

  pageEditVersion() {
    return <AboutEditVersion />
  }

  render() {
    return (
      <div className="about-edit">
        <AboutEditOptions
          pages={ pages }
          currentPage={ this.state.currentPage }
          stateHandler={ this.stateHandler.bind(this) } />

        { this.getCurrentPage() }
      </div>
    )
  }
}