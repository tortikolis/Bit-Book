import React, { Component, Fragment } from 'react';


export class Feed extends Component {
    constructor(props) {
        super(props)

        this.state = {
            feed: []
        }
    }


    render() {
        if (this.state.feed.length === 0) {
            return (
                <div className="row container">
                    <div className="col s12">
                        <div className="card-panel white center">
                            <span className="grey-text">Nothing in feed</span>
                        </div>
                    </div>
                </div>
            )
        }
    }
}