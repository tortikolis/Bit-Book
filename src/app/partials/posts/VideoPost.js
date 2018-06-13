import React, { Component, Fragment } from 'react';

export class VideoPost extends Component {
    constructor(props){
        super(props);

        this.state = {
            numOfPosts: 0
        }
    }

    render(){
      return (
        <div className="row container">
        <div className="col s12">
          <div className="card #e0f7fa cyan lighten-5">
          <div className='video-container'>
            <div className="video-container">
              <iframe src="https://www.youtube.com/embed/A71aqufiNtQ" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div>
            </div>
            <div className="card-action">
            <span className='grey-text'>Video post</span>
            <span className='right grey-text'>{`${this.state.numOfPosts} Comments`}</span>
            </div>
          </div>
        </div>
      </div>
      )  
    }
}