import React from 'react';

import get from '../../http/get.js'

import './profile_image.scss';

export default class ProfileImage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      images: [],
      imagesLoaded: false
    }
  }

  componentDidUpdate() {
    var attachments = this.props.attachments;

    if (attachments !== undefined && attachments.length !== 0 && !this.state.imagesLoaded) {
      this.setState({
        imagesLoaded: true
      })

      attachments.forEach((attachment) => {
        this.loadImage(attachment)
      })
    }
  }

  loadImage(attachment) {
    get('api/v1/attachments/' + attachment.id, (payload) => {
      if (payload.hasErrors()) {
        console.log("[ERROR]" + payload.getErrors())
      } else {
        let imagesLoaded = this.state.images;
        imagesLoaded.push(payload.data.image)

        this.setState({
          images: imagesLoaded
        })
      }
    })
  }

  getImage() {
    var images = this.state.images;

    if (images === undefined || images.length === 0) {
      return ""
    } else {
      return images[0]
    }

  }

  render() {
    return(
      <div className='image_frame'>
        <img className='image' alt="No Images" src={this.getImage()}/>
      </div>
    )
  }
}