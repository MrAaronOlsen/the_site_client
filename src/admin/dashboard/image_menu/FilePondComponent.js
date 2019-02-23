import React from 'react';
import { FilePond } from 'react-filepond';

import JwtToken from '../../../auth/JwtToken.js';

import 'filepond/dist/filepond.min.css';

export default class FilePondComponent extends React.Component {

  addImage(response) {
    var id = JSON.parse(response).id;
    this.props.addImage(id);
  }

  filepondServer() {
    return {
      url: 'http://localhost:8080/',
      timeout: 7000,
      process: {
        url: './api/v1/attachments',
        method: 'POST',
        headers: {
          'Authentication': 'Bearer ' + JwtToken.getToken()
        },
        onload: this.addImage.bind(this)
      },
      allowRevert: null
    }
  }

  render() {
    return(
      <FilePond
        server={this.filepondServer()}
        allowMultiple={true}
        name='attachment'
        allowRevert={false} />
    )
  }
}