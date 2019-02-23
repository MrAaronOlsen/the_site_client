import React from 'react';

export default class AboutEditVersionListRow extends React.Component {
  handleClick() {
    this.props.stateHandler('selected', this.props.version);
  }

  getClasses() {
    var classes = 'about-edit-version-list-row';

    if (this.props.version.id === this.props.currentId) {
      classes += ' version-selected';
    }

    return classes;
  }

  render() {

    return(
      <div className={ this.getClasses() }
        onClick={ this.handleClick.bind(this) } >
        { this.props.version.name }
      </div>
    )
  }
}