import React from 'react';

import ImageNode from './ImageNode.js'

import get from '../../../http/get.js'
import destroy from '../../../http/destroy.js'

export default class ImageNodes extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      nodes: [],
      selected: this.processPreselected()
    }

    this.props.handler("addImage", this.addImage.bind(this))
    this.props.handler("removeImages", this.removeImages.bind(this))
    this.props.handler("getSelected", this.getSelected.bind(this))
  }

  componentDidMount() {
    this.fetchImages()
  }

  processPreselected() {
    var selected = {}
    var preSelected = this.props.preSelected

    if (preSelected !== undefined) {
      preSelected.forEach((pre) => {
        selected[pre.id] = pre.id;
      })
    }

    return selected;
  }

  onSelect(id, add) {
    var selected = this.state.selected

    if (add) {
      selected[id] = id;
    } else {
      delete selected[id]
    }

    this.setState({
      selected: selected
    })
  }

  getSelected() {
    return Object.keys(this.state.selected);
  }

  checkIfPreSelected(imageId) {
    var preSelected = this.props.preSelected

    if (preSelected !== undefined) {
      return preSelected.some((attachment) => attachment.id === imageId)
    }
  }

  addImage(id) {
    var nodes = this.state.nodes
    nodes.push(
      <ImageNode key={nodes.length}
        imageId={id}
        onSelect={this.onSelect.bind(this)} />
    )

    this.setState({
      nodes: nodes
    })
  }

  removeImages() {
    var body = {
      ids: Object.keys(this.state.selected)
    }

    destroy('api/v1/attachments', JSON.stringify(body), (payload) => {
      if (payload.hasErrors()) {
        window.alert(payload.getErrors())
      } else {
        let removedIds = payload.data.ids

        var nodesLeft = this.state.nodes.filter((node) => {
          return !removedIds.includes(node.props.imageId.toString())
        })

        this.setState({
          nodes: nodesLeft
        })
      }
    })
  }

  fetchImages() {
    get('api/v1/attachments', (payload) => {
      if (payload.hasErrors()) {
        window.alert(payload.getErrors());
        return;
      }

      var images = payload.data.images;
      var nodes = [];

      for (let i = 0 ; i < images.length ; i++) {
        let imageId = images[i];

        nodes.push(
          <ImageNode key={i}
            imageId={ imageId }
            onSelect={ this.onSelect.bind(this) }
            preSelected={ this.checkIfPreSelected(imageId) } />
        )
      }

      this.setState({
        nodes: nodes
      })
    })
  }

  render() {
    return(
      <div className='image-nodes'>
        <div className='container'>
          {this.state.nodes.map(node => {
            return node;
          })}
        </div>
      </div>
    )
  }
}