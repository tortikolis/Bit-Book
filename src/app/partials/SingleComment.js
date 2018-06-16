import React from 'react';



export const SingleComment = (props) => {

    return (
        <div className="collection-item avatar comment">
            <img src="https://facefacts.scot/images/science/Q2_high_health_f.jpg" alt="" className="circle" />
            <span className="title username">{props.comment.authorName}</span>
            <p>{props.comment.body}
            </p>
        </div>
    )
}

