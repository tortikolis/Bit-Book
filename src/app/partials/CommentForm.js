import React, { Component } from 'react';

export class CommentForm extends Component {

    render() {
        return (

            <div className="row form">
                <div className="col s12">
                    <div className="input-field col s10">
                        <textarea id="textarea1" className="materialize-textarea" placeholder="Add your comment"></textarea>
                    </div>
                    <div className="col s2">
                        <button className="waves-effect waves-light btn-small">Send</button>
                    </div>
                </div>
            </div>
        )
    }
}