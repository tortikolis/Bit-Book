import React, { Component, Fragment } from "react";

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



    inputTextHandler = event => {
        event.preventDefault();
        this.setState({inputTextValue:event.target.value});
    }

    inputImageHandler = event => {
        event.preventDefault();
        this.setState({inputImageValue:event.target.value});
    }

    inputVideoHandler = event => {
        event.preventDefault();
        this.setState({inputVideoValue:event.target.value});
    }

    validateForm = event => {
        event.preventDefault();
        const { buttonType } = this.props;
        const {inputImageValue, inputTextValue, inputVideoValue} = this.state;
        if(buttonType==="text") {
            if(!inputTextValue) {
                this.setState({errorMessage:"Input invalid, please enter something"})
            } else {
                this.setState({errorMessage:""})
            }
        }
        if(buttonType==="image") {
            if(!inputImageValue){
                this.setState({errorMessage:"Input invalid, please enter something"})
            } else if (!inputImageValue.includes(".jpg" || ".png" || ".svg" || ".gif" || ".bmp" || ".jpeg")) {
                this.setState({errorMessage:"Input invalid, please enter valid img format"})
            } else {
                this.setState({errorMessage:""})
            }
        }
        if(buttonType==="video") {
            if(!inputVideoValue || !inputVideoValue.includes("https://www.youtube.com/watch?v=")) {
                this.setState({errorMessage:"Input invalid, please enter valid youtube url"})
            } else {
                this.setState({errorMessage:"Successfull"})
            }
        }
    }

    


    render() {
        const { buttonType } = this.props;
        if (!buttonType) {
            return null
        }

        return (
            <Fragment>
                <div className="modal-holder" onClick={this.props.closeModal}>
                    <div className="modal open" id="show-modal">
                        <div className="modal-content">
                            {buttonType === 'text' && this.renderTextForm()}
                            {buttonType === 'image' && this.renderImageForm()}
                            {buttonType === 'video' && this.renderVideoForm()}
                            <div className="modal-footer">
                                <a href="#!" className="modal-close waves-effect waves-green btn btn" onClick={this.validateForm}>POST</a>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>

        )
    }
}