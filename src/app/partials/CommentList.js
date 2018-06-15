import React from 'react';
import { SingleComment } from './SingleComment'
 
export const CommentList = (props) => {



    return (
        <div className="collection">
            {props.comments.map((comment, key) => {
                return <SingleComment comment={comment} key={key} />
            })}
        </div>

    )
}


// ul collection