import React from 'react';

import ActionBtn from '../../../modules/ActionBtn.js'

import './about_edit_options.scss'

export default class AboutEditOptions extends React.Component {
  constructor(props) {
    super(props)

    this.props.stateHandler('currentPage', this.props.pages.editContent)
  }

  delegatePageSwitch(event) {
    const selectedPage = event.target.parentElement.dataset.id;

    if (this.props.currentPage === selectedPage) {
      return;
    }

    this.props.stateHandler('currentPage', selectedPage)
  }

  render() {
    return(
      <div className='about-edit-options'>
        <ActionBtn
          Text='Edit Version'
          dataId={this.props.pages.editVersion}
          onClick={this.delegatePageSwitch.bind(this)}
          width='max-content' />

        <ActionBtn
          Text='Edit Content'
          dataId={this.props.pages.editContent}
          onClick={this.delegatePageSwitch.bind(this)}
          width='max-content' />
      </div>
    )
  }
}