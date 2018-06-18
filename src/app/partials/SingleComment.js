import React from 'react';



export const SingleComment = (props) => {

    return (
        <div className="collection-item avatar comment">
            <img src="https://varme-center.se/wp-content/uploads/2016/06/omdome.png" alt="" className="circle" />
            <span className="title username">{props.comment.authorName}</span>
            <p>{props.comment.body}
            </p>
        </div>
    )
}

