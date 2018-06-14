import React, { Component, Fragment } from "react";

export class Modals extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputTextValue: "",
            inputImageValue: "",
            inputVideoValue: ""

        }
    }

    hideModal = event => {
        if (event.target.classList.contains("modal-holder")) {
            const showModal = document.querySelector("#show-modal");
            const modalHolder = document.querySelector(".modal-holder");
            if (this.props.button) {
                modalHolder.classList.add("none");
                modalHolder.classList.remove("block");
            }
        }
    }

    renderTextForm = () => {
        return (
            <Fragment>
                <div className="modal-holder" onClick={this.hideModal} >
                    <div className="modal open" id="show-modal">
                        <div className="modal-content">
                            <h4>New post</h4>
                            <p>Post content</p>
                            <input type="text" className="inputText" onChange={this.inputTextHandler} />
                        </div>
                        <div className="modal-footer">
                            <a href="#!" className="modal-close waves-effect waves-green btn modal-text-btn" onClick={this.validateTextInput}>POST</a>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }

    renderImageForm = () => {
        return (
            <Fragment>
                <div className="modal-holder" onClick={this.hideModal}>
                    <div className="modal open" id="show-modal">
                        <div className="modal-content">
                            <h4>New image post</h4>
                            <p>Post content</p>
                            <input type="text" onChange={this.inputImageHandler} />
                        </div>
                        <div className="modal-footer">
                            <a href="#!" className="modal-close waves-effect waves-green btn modal-img-btn">POST</a>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }

    renderVideoForm = () => {
        return (
            <Fragment>
                <div className="modal-holder" onClick={this.hideModal}>
                    <div className="modal open" id="show-modal">
                        <div className="modal-content">
                            <h4>New video post</h4>
                            <p>Post content</p>
                            <input type="text" onChange={this.inputVideoHandler} />
                        </div>
                        <div className="modal-footer">
                            <a href="#!" className="modal-close waves-effect waves-green btn btn modal-video-btn">POST</a>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }



    // inputTextHandler = event => {
    //     event.preventDefault();
    //     this.setState({inputTextValue:event.target.value});
    // }

    // inputImageHandler = event => {
    //     event.preventDefault();
    //     this.setState({inputImageValue:event.target.value});
    // }

    // inputVideoHandler = event => {
    //     event.preventDefault();
    //     this.setState({inputVideoValue:event.target.value});
    // }

    // validateTextInput = event => {
    //     if (!this.state.inputTextValue) {
    //         alert("Empty input")
    //     }else {

    //     }
    // }


    render() {
        // if (!this.props.button) {
        //     return null
        // }

        return (
            <Fragment>
                {this.props.button === 'text' && this.renderTextForm()}
                {this.props.button === 'image' && this.renderImageForm()}
                {this.props.button === 'video' && this.renderVideoForm()}
            </Fragment>

        )
    }
}