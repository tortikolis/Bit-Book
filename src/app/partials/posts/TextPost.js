import React, { Component, Fragment } from 'react';

export class TextPost extends Component {
    constructor(props){
        super(props);

        this.state = {
            numOfComments: 0
        }
    }

    render(){
        return (
          <div className="row container">
          <div className="col s12">
            <div className="card #ffffff white">
            <div class="card-content">
              <p>{this.props.text}</p>
              </div>
              <div className="card-action">
              <span className='grey-text'>Text post</span>
              <span className='right grey-text'>{`${this.state.numOfComments} Comments`}</span>
              </div>
            </div>
          </div>
        </div>
        )  
      }
}

