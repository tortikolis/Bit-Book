import React from 'react';



export const SingleComment = (props) => {

    return (
        <div className="collection-item avatar comment">
            <img src="https://facefacts.scot/images/science/Q2_high_health_f.jpg" alt="" className="circle" />
            <span className="title username">{props.comment.authorName}</span>
            <p>{props.comment.body}
            </p>
        </div>

        // <div class="row">
        //     <div class="col s12">
        //         <div class="card #00acc1 cyan darken-1">
        //             <div class="card-content ">
        //                 <p>{props.comment.body}</p>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}

