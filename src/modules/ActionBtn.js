import React from 'react';
import './action_btn.scss'

export default class ActionBtn extends React.Component {

  getClasses() {
    if (this.props.disabled) {
      return 'action_btn disabled'
    } else {
      return 'action_btn'
    }
  }

  getAction() {
    if (this.props.disabled) {
      return () => {};
    } else {
      return this.props.onClick;
    }
  }

  getStyles() {
    return {
      width: this.props.width || '50px'
    }
  }

  render() {
    return(
      <div
        className={this.getClasses()}
        style={this.getStyles()}
        onClick={this.getAction()}
        data-id={this.props.dataId}>

        <div className='text'>
          {this.props.Text}
        </div>
      </div>
    )
  }
}