import React from 'react';
import './drop_down_list.scss'

// Props
// title: Title given to list header.
// elements: List of elements used to build rows.
// contentKey: Key used to pull content from element.
// idKey: Key used to pull id from element.
// activeId: [Optional] Used to highlight an already selected row.
// handleSelection: function that takes id of row clicked on. [ (id) => {} ]

export default class DropDownList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      open: false
    }
  }

  openList() {
    this.setState({
      open: true
    })
  }

  closeList() {
    this.setState({
      open: false
    })
  }

  buildListRows() {
    if (this.state.open) {
      return <DropDownListRows
        elements={this.props.elements}
        contentKey={this.props.contentKey}
        idKey={this.props.idKey}
        activeId={this.props.activeId}
        handleSelection={this.props.handleSelection} />

    } else {
      return null
    }
  }

  render() {

    return(
      <div className='drop-down-list'
        onMouseEnter={ this.openList.bind(this) }
        onMouseLeave={ this.closeList.bind(this) } >

        <DropDownListHeader title={this.props.title} />

          { this.buildListRows() }
      </div>
    )
  }
}

class DropDownListHeader extends React.Component {

  render() {
    return(
      <div className='list-header'>
        <div className='list-title'>{this.props.title}</div>
      </div>
    )
  }
}

class DropDownListRows extends React.Component {

  getList() {
    const idKey = this.props.idKey
    const contentKey = this.props.contentKey

    return this.props.elements.map((element) => {
      const id = element[idKey]
      const content = element[contentKey]

      return <DropDownListRow
        content={content}
        elementId={id}
        active={this.props.activeId === id}
        handleSelection={this.props.handleSelection}
        key={id} />
    })
  }

  render() {
    return(
      <div className='list-rows'>
        { this.getList() }
      </div>
    )
  }
}

class DropDownListRow extends React.Component {

  handleClick(event) {
    this.props.handleSelection(this.props.elementId)
  }

  render() {
    var rowStyle = 'list-row'

    if (this.props.active) {
      rowStyle += ' active'
    }

    return(
      <div className={rowStyle} onClick={this.handleClick.bind(this)} >
        <div className='list-row-content'>
          {this.props.content}
        </div>
      </div>
    )
  }
}