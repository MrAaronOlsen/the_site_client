import React from 'react';
import ActionBtn from '../modules/ActionBtn.js'

import Get from '../utils/get.js';
import Put from '../utils/put.js';

import './bio.scss';

export default class BioView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content: "",
      id: ""
    }
  }

  componentDidMount() {
    Get.get('contents#index', (results) => {
      var data = results[0];

      this.setState({
        content: data.body,
        id: data.id
      })
    })
  }

  save = () => {
    var body = {
      body: this.state.content
    }

    Put.put('contents/' + this.state.id, body, (results) => {
      window.alert("Your Request Has Been Saved")
    })
  }

  handleChange = (event) => {
    this.setState({
      content: event.target.value
    })
  }

  render() {

    return (
      <div className='box'>
        <textarea
          className='form'
          type='text'
          value={this.state.content}
          onChange={this.handleChange} />

        <ActionBtn Text="Save" onClick={this.save} />
      </div>
    )
  }
}