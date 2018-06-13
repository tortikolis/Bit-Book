import React, { Component, Fragment } from 'react';

export class Main extends Component {
    constructor(props) {
        super(props)

        this.state = {
            feed: []
        }
    }

    render() {
        if (this.state.feed.length === 0) {
            return (
                <div class="row container">
                    <div class="col s12">
                        <div class="card-panel white center">
                            <span class="grey-text">Nothing in feed</span>
                        </div>
                    </div>
                </div>
            )
        }
    }
}