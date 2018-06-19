import React, { Component } from 'react';


export class CommentForm extends Component {
    constructor(props){
        super(props)

       this.state = {
           comment: ""
       };
    }

    isButtonDisabled = () => {
        return !this.state.comment;
    }

    createComment = () => {
        this.props.sendComment(this.state.comment);
    }

    onCommentChange = (event) => {
        this.setState({comment: event.target.value});
    }

    render(){
        return (
            <div className="row form">
                <div className="col s12">
                    <div className="input-field col s10">
                        <textarea value={this.state.comment} onChange={this.onCommentChange} id="textarea1" className="materialize-textarea" placeholder="Add your comment" ></textarea>
                    </div>
                    <div className="col s2">
                        <button className={`waves-effect waves-light btn-small`} disabled={this.isButtonDisabled()} onClick={this.createComment}>Send</button>
                    </div>
                </div>
            </div>
        )
    }
}
