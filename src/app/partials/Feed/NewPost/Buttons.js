import React, { Component } from "react";
import M from 'materialize-css'

export class Buttons extends Component {
    constructor(props) {
        super(props)

        this.floatingBtn = React.createRef();
    }

    componentDidMount() {
        M.FloatingActionButton.init(this.floatingBtn.current)
    } 

    render() {

        return (
            <div className="fixed-action-btn" id="main-btn" ref={this.floatingBtn} >
                <a className="btn-floating btn-large red">
                    <i className="large material-icons">add</i>
                </a>
                <ul>
                    <li><a className="btn-floating yellow darken-1 modal-trigger" data-target="text" onClick={this.props.activeBtn}><i className="material-icons">mode_edit</i></a></li>
                    <li><a className="btn-floating green darken-1 modal-trigger" data-target="image" onClick={this.props.activeBtn}><i className="material-icons">image</i></a></li>
                    <li><a className="btn-floating blue darken-1 modal-trigger" data-target="video" onClick={this.props.activeBtn}><i className="material-icons">ondemand_video</i></a></li>
                </ul>
            </div>
        )
    }
}
