import React, { Component, Fragment } from "react";
import { postText, postImage, postVideo } from "../../services/postFetch";

export class Modals extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputTextValue: "",
            inputImageValue: "",
            inputVideoValue: "",
            errorMessage: ""
        }
    }

    renderTextForm = () => {
        return (
            <Fragment>
                <h4>New post</h4>
                <p>Post content</p>
                <input type="text" className="inputText" onChange={this.inputTextHandler} />
                <p className="error">{this.state.errorMessage}</p>
            </Fragment>

        )
    }

    renderImageForm = () => {
        return (
            <Fragment>
                <h4>New image post</h4>
                <p>Post content</p>
                <input type="text" onChange={this.inputImageHandler} />
                <p className="error">{this.state.errorMessage}</p>
            </Fragment>
        )
    }

    renderVideoForm = () => {
        return (
            <Fragment>
                <h4>New video post</h4>
                <p>Post content</p>
                <input type="text" onChange={this.inputVideoHandler} />
                <p className="error">{this.state.errorMessage}</p>
            </Fragment>
        )
    }


    onCloseModal = (event) => {
        if (event.target.classList.contains("modal-holder")) {
            this.props.closeModal();
        }
    }

    inputTextHandler = event => {
        event.preventDefault();
        this.setState({ inputTextValue: event.target.value });
    }

    inputImageHandler = event => {
        event.preventDefault();
        this.setState({ inputImageValue: event.target.value });
    }

    inputVideoHandler = event => {
        event.preventDefault();
        this.setState({ inputVideoValue: event.target.value });
    }

    validateForm = () => {
        const { buttonType } = this.props;
        const { inputImageValue, inputTextValue, inputVideoValue } = this.state;
        if (buttonType === "text") {
            if (!inputTextValue) {
                this.setState({ errorMessage: "Input invalid, please enter something" })
                return false;
            } else {
                this.setState({ errorMessage: "" });
                return buttonType;
            }
        }
        if (buttonType === "image") {
            if (!inputImageValue) {
                this.setState({ errorMessage: "Input invalid, please enter something" })
                return false;
            } else if (!inputImageValue.includes(".jpg" || ".png" || ".svg" || ".gif" || ".bmp" || ".jpeg")) {
                this.setState({ errorMessage: "Input invalid, please enter valid img format" })
                return false;
            } else {
                this.setState({ errorMessage: "" })
                return buttonType;
            }
        }
        if (buttonType === "video") {
            if (!inputVideoValue || !inputVideoValue.includes("https://www.youtube.com/watch?v=")) {
                this.setState({ errorMessage: "Input invalid, please enter valid youtube url" })
                return false;
            } else {
                this.setState({ errorMessage: "" });
                return buttonType;
            }
        }
    }

    createTextPost = () => {
        postText({ text: this.state.inputTextValue })
            .then(() => this.props.changeState());//mozda ova funkcija ne treba da se zove changeState vec refreshPosts ili nesto
    }

    createImagePost = () => {
        postImage({ imageUrl: this.state.inputImageValue })
            .then(() => this.props.changeState());
    }

    createVideoPost = () => {
        let embedUrl = this.state.inputVideoValue.replace("watch?v=", "embed/");
        postVideo({ videoUrl: embedUrl })
            .then(() => this.props.changeState());
    }

    createPost = event => {
        event.preventDefault();
        let validationInput = this.validateForm()
        if (validationInput) {
            if(validationInput === "text") {
                this.createTextPost();
            }
            if(validationInput === "image") {
                this.createImagePost();
            }
            if(validationInput === "video") {
                this.createVideoPost();
            }
            this.props.closeModal();
        }
    }

    render() {
        const { buttonType } = this.props;
        if (!buttonType) {
            return null
        }

        return (
            <Fragment>
                <div className="modal-holder" onClick={this.onCloseModal}>
                    <div className="modal open" id="show-modal">
                        <div className="modal-content">
                            {buttonType === 'text' && this.renderTextForm()}
                            {buttonType === 'image' && this.renderImageForm()}
                            {buttonType === 'video' && this.renderVideoForm()}
                            <div className="modal-footer">
                            {/* mozda potrebno promeniti href */}
                                <a href="#!" className="modal-close waves-effect waves-green btn btn" onClick={this.createPost}>POST</a>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}