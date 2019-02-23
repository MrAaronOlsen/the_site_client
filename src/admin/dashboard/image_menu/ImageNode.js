import React from 'react';

import get from '../../../http/get.js'

export default class ImageNode extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      image: "",
      selected: this.props.preSelected
    }
  }

  componentDidMount() {
    get('api/v1/attachments/' + this.props.imageId, (payload) => {
      if (payload.hasErrors()) {
        this.setState({
          image: "Failed"
        })
      } else {
        this.setState({
          image: payload.data.image
        })
      }
    })
  }

  onSelect() {
    if (this.state.selected) {
      this.props.onSelect(this.props.imageId, false)
    } else {
      this.props.onSelect(this.props.imageId, true)
    }

    this.setState({
      selected: !this.state.selected
    })
  }

  render() {
    return(
      <div className='image-node'>
        <input type='checkbox'
          defaultChecked={ this.state.selected }
          className='checkbox'
          onClick={this.onSelect.bind(this)}/>
        <img className='image' alt="" src={this.state.image} />
      </div>
    )
  }
}