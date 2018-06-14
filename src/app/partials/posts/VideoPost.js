import React, { Component, Fragment } from 'react';

export class VideoPost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numOfComments: 0
    }
  }

  render() {
    return (
      <div className="row container">
        <div className="col s12">
          <div className="card #ffffff white">
            <div className='video-container'>
              <div className="video-container">
                <iframe src={this.props.videoUrl} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
              </div>
            </div>
            <div className="card-action">
              <span className='grey-text'>Video post</span>
              <span className='right grey-text'>{`${this.state.numOfComments} Comments`}</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}