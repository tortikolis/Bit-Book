import React from 'react';

export const VideoPostBody = (props) => {

    return (
        <div className="row content">
            <div className="col s12">
                <span className="deleteImagePostBtn">X</span>
                <div className="video-container">
                    <iframe src={props.post.videoUrl} title="video-post-body" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                </div>
            </div>
        </div>
    )
}