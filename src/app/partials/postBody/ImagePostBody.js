import React from 'react';

export const ImagePostBody = (props) => {

    return (
        <div className="row content">
            <div className="col s12 ">
                <div className="card">
                    <div className="card-image">
                    {props.authorId === props.userId ? <span className="deleteImagePostBtn" onClick={props.deletePostOnClick}>X</span> : <span></span>}
                        <img src={props.post.imageUrl} alt=''/>
                    </div>
                </div>
            </div>
        </div>
    )
}
