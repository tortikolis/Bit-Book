import React, { Component } from 'react';
import Modals from './Modals';
import { Buttons } from './Buttons';
import { FeedList } from './FeedList';

import { FilterPost } from './FilterPost';
import { connect } from 'react-redux';
import { buttonTypeAction, selectedPostAction, getPostsAction } from '../../state/actions/feedActions';


class Feed extends Component {

    componentDidMount() {
        this.props.getPosts()
    };

    render() {
        return (
            <div className="row container feed">
                <div className="col s12">
                    <FeedList posts={this.props.posts} selectedOption={this.props.selectedOption} />
                    <FilterPost selectedPost={this.props.selectedPost} />
                    <Modals buttonType={this.props.buttonType} closeModal={this.props.resetButtonType} changeState={this.props.getPosts} />
                    <Buttons activeBtn={this.props.clickedBtn} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        posts: state.posts,
        buttonType: state.buttonType,
        selectedOption: state.selectedOption
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getPosts: () => { dispatch(getPostsAction()) },
        resetButtonType: () => { dispatch(buttonTypeAction(null)) },
        clickedBtn: event => { dispatch(buttonTypeAction(event.target.parentElement.getAttribute("data-target"))) },
        selectedPost: event => { dispatch(selectedPostAction( event.target.value)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Feed);