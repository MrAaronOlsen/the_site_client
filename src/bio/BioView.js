import React from 'react';
import Get from '../utils/get.js';

import './bio.scss';

export default class BioView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    }
  }

  componentDidMount() {
    Get.get('contents', (results) => {
      var data = results[0];

      this.setState({
        content: data.body
      })
    })
  }

  render() {
    return (
      <div className='box'>
        <div className='text'>{this.state.content}</div>
      </div>
    )
  }
}