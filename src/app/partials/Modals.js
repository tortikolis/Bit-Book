import React, { Component, Fragment } from "react";
import { postText, postImage, postVideo } from "../../services/postFetch";
import { connect } from 'react-redux';
import { setInputTextAction, setInputImageAction, setInputVideoAction, setErrorAction, emptyErrorAction } from '../../state/actions.js/modalActions';

class Modals extends Component {
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
                <input type="text" className="inputText" onChange={this.props.inputTextHandler} />
                <p className="error">{this.props.errorMessage}</p>
            </Fragment>

        )
    }

    renderImageForm = () => {
        return (
            <Fragment>
                <h4>New image post</h4>
                <p>Post content</p>
                <input type="text" onChange={this.props.inputImageHandler} />
                <p className="error">{this.props.errorMessage}</p>
            </Fragment>
        )
    }

    renderVideoForm = () => {
        return (
            <Fragment>
                <h4>New video post</h4>
                <p>Post content</p>
                <input type="text" onChange={this.props.inputVideoHandler} />
                <p className="error">{this.props.errorMessage}</p>
            </Fragment>
        )
    }


    onCloseModal = event => {
        if (event.target.classList.contains("modal-holder")) {
            this.props.closeModal();
        }
    }


    validateForm = () => {
        const { buttonType } = this.props;
        const { inputImageValue, inputVideoValue, inputTextValue } = this.props;

        if (buttonType === "text") {
            if (!inputTextValue) {
                this.props.addErrorMessage("Input invalid, please enter some text");
                return false
            } else {
                this.props.emptyErrorMessage();
                return buttonType
            }
        }
        if (buttonType === "image") {
            if (!inputImageValue) {
                this.props.addErrorMessage("Input invalid, please enter image");
            } else if (!inputImageValue.includes(".jpg" || ".png" || ".svg" || ".gif" || ".bmp" || ".jpeg")) {
                this.props.addErrorMessage("Input invalid, please enter valid image format")
                return false
            } else {
                this.props.emptyErrorMessage();
                return buttonType
            }
        }
        if (buttonType === "video") {
            if (!inputVideoValue || !inputVideoValue.includes("https://www.youtube.com/watch?v=")) {
                this.props.addErrorMessage("Input invalid, please enter valid youtube url")
                return false
            } else {
                this.props.emptyErrorMessage();
                return buttonType
            }
        }
    }

    createTextPost = () => {
        postText({ text: this.props.inputTextValue })
            .then(() => this.props.changeState());
    }

    createImagePost = () => {
        postImage({ imageUrl: this.props.inputImageValue })
            .then(() => this.props.changeState());
    }

    createVideoPost = () => {
        let embedUrl = this.props.inputVideoValue.replace("watch?v=", "embed/");
        postVideo({ videoUrl: embedUrl })
            .then(() => this.props.changeState());
    }

    createPost = event => {
        event.preventDefault();
        let postType = this.validateForm()
        if (postType) {
            postType === "text" && this.createTextPost();
            postType === "image" && this.createImagePost();
            postType === "video" && this.createVideoPost();
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
                            <span className="modal-exit" onClick={this.props.closeModal}> X </span>
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

const mapStateToProps = state => {
    return {
        inputTextValue: state.inputTextValue,
        inputImageValue: state.inputImageValue,
        inputVideoValue: state.inputVideoValue,
        errorMessage: state.errorMessage
    }
}

const mapDispatchToProps = dispatch => {
    return {
        inputTextHandler: event => { dispatch(setInputTextAction(event.target.value)) },
        inputImageHandler: event => { dispatch(setInputImageAction(event.target.value)) },
        inputVideoHandler: event => { dispatch(setInputVideoAction(event.target.value)) },
        addErrorMessage: (err) => { dispatch(setErrorAction(err)) },
        emptyErrorMessage: () => { dispatch(emptyErrorAction()) },
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Modals);