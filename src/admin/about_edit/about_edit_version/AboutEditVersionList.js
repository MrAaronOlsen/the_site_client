import React from 'react';
import AboutEditVersionListRow from './AboutEditVersionListRow.js'

export default class AboutEditVersionList extends React.Component {

  buildList() {
    const allVersions = this.props.allVersions;

    return allVersions.map((version) => {
      return <AboutEditVersionListRow
        key={ version.id }
        version={ version }
        currentId= { this.props.selected.id }
        stateHandler={ this.props.stateHandler.bind(this) } />
    })
  }

  render() {
    return(
      <div className='about-edit-version-list'>
        { this.buildList() }
      </div>
    )
  }
}