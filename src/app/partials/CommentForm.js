import React, { Component } from 'react';

export class CommentForm extends Component {

    render() {
        return (
            
            <div class="row form">
                <div className ="col s12">
                <div class="input-field col s10">
                    <textarea id="textarea1" class="materialize-textarea" placeholder="Add your comment"></textarea>
                </div>
                <div className="col s2">
                    <button class="waves-effect waves-light btn-small">button</button>
                </div>
                </div>
            </div>

        )

    }

}