import React from 'react';
import BioView from './BioView.js'
import BioEdit from './BioEdit.js'

import Get from '../utils/get.js';

import './bio.scss';

export default class Bio extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    }
  }

  render() {

    return (
      <div className='bio'>
        <BioEdit />
      </div>
    )
  }
}