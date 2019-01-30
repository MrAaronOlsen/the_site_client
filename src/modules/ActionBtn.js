import React from 'react';
import './action_btn.scss'

export default class ActionBtn extends React.Component {

  render() {
    return(
      <div className='action_btn'
        onClick={this.props.onClick}>
        <div className='text'>
          {this.props.Text}
        </div>
      </div>
    )
  }
}