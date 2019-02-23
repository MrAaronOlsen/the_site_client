import React from 'react';

import AboutEditImages from './AboutEditImages.js'

import DropDownList from '../../../modules/DropDownList.js';
import ActionBtn from '../../../modules/ActionBtn.js'

export default class AboutEditContentOptions extends React.Component {

  render() {
    return(
      <div className="about-edit-content-options">
        <div className="about-edit-content-list">
          <DropDownList
            title='Select Version'
            elements={ this.props.allAbouts }
            contentKey='name'
            idKey='id'
            activeId={ this.props.selected.id }
            handleSelection={ this.props.handleSelection } />
        </div>

        <AboutEditImages
          saveImages={ this.props.saveImages }
          selectedImages={ this.props.selected.attachments }
          stateHandler={ this.props.stateHandler } />

        <ActionBtn Text='Save' onClick={ this.props.saveContent }/>
      </div>
    )
  }
}