import React from "react";

export const Buttons = props => {

    return (
        <div className="fixed-action-btn" id="main-btn">
            <a className="btn-floating btn-large red">
                <i className="large material-icons">add</i>
            </a>
            <ul>
                <li><a className="btn-floating yellow darken-1 modal-trigger" data-target="text" onClick={props.activeBtn}><i className="material-icons">mode_edit</i></a></li>
                <li><a className="btn-floating green darken-1 modal-trigger" data-target="image" onClick={props.activeBtn}><i className="material-icons">image</i></a></li>
                <li><a className="btn-floating blue darken-1 modal-trigger" data-target="video" onClick={props.activeBtn}><i className="material-icons">ondemand_video</i></a></li>
            </ul>
        </div>
    )
}
