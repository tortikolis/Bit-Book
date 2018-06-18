import React, { Component } from 'react';

import { postComment } from '../../services/commentFetch';


export class CommentForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            commentInput: '',
            isDisabled: true
        }
    }

    commentInputHandler = event => {
        this.setState({ commentInput: event.target.value })
    }

    isButtonDisabled = () => {
        const comment = this.state.commentInput;
        return comment ? "" : "disabled"
    }

    sendComment = () => {
        const id = this.props.postId;
        const comment = this.state.commentInput;
        const content = {
            body: comment,
            postId: id,
            authorId: 100
        }
        postComment(content)
            .then(() => this.props.refreshComments())

        this.setState({ commentInput: '' })
    }

    render() {

        return (
            <div className="row form">
                <div className="col s12">
                    <div className="input-field col s10">
                        <textarea id="textarea1" className="materialize-textarea" placeholder="Add your comment" value={this.state.commentInput} onChange={this.commentInputHandler}></textarea>
                    </div>
                    <div className="col s2">
                        <button className={`waves-effect waves-light btn-small ${this.isButtonDisabled()}`} onClick={this.sendComment}>Send</button>
                    </div>
                </div>
            </div>
        )
    }
}