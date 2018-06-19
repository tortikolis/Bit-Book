import React, { Component } from 'react';


export const CommentForm = (props) => {

    const isButtonDisabled = () => {
        const comment = props.commentInput;
        return comment ? "" : "disabled"
    }

    return (
        <div className="row form">
            <div className="col s12">
                <div className="input-field col s10">
                    <textarea id="textarea1" className="materialize-textarea" placeholder="Add your comment" value={props.commentInput} onChange={props.commentInputHandler}></textarea>
                </div>
                <div className="col s2">
                    <button className={`waves-effect waves-light btn-small ${isButtonDisabled()}`} onClick={props.sendComment}>Send</button>
                </div>
            </div>
        </div>
    )
}
