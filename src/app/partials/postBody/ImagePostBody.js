import React from 'react';

export const ImagePostBody = (props) => {

    return (
        <div class="row content">
            <div class="col s12 ">
                <div class="card">
                    <div class="card-image">
                        <img src={props.post.imageUrl} alt=''/>
                    </div>
                </div>
            </div>
        </div>
    )
}
