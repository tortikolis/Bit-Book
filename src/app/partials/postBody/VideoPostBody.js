import React from 'react';

export const VideoPostBody = (props) => {

    return (
        <div className="row content">
            <div className="col s12">
            {props.authorId === props.userId ? <span className="deleteImagePostBtn" onClick={props.deletePostOnClick}>X</span> : <span></span>}
                <div className="video-container">
                    <iframe src={props.post.videoUrl} title="video-post-body" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                </div>
            </div>
        </div>
    )
}