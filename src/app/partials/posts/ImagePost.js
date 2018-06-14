import React, { Component, Fragment } from 'react';

export class ImagePost extends Component {
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
                        <div class="card-image">
                            <img src='https://i.ytimg.com/vi/iy9LjmnzU9Y/maxresdefault.jpg' />
                        </div>
                        <div className="card-action">
                            <span className='grey-text'>Image post</span>
                            <span className='right grey-text'>{`${this.state.numOfComments} Comments`}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}