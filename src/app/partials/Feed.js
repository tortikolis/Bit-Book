import React, { Component } from 'react';
import { Modals } from './Modals';
import { Buttons } from './Buttons';
import { FeedList } from './FeedList';
import { getAllPosts, getLastTenPosts } from '../../services/postFetch';
import { FilterPost } from './FilterPost';


export class Feed extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: [],
            buttonType: null,
            selectedOption: null,
            skip: 0,
            top: 10
        }
    }


    // getPosts = () => {
    //     getAllPosts()
    //         .then((postList) => {
    //             this.setState({
    //                 posts: postList
    //             })
    //         })
    // }


    getPosts = () => {
        getLastTenPosts(this.state.top, this.state.skip)
            .then((postList) => {
                console.log(this.state.skip);

                this.setState({
                    posts: postList,
                    skip: this.state.skip + 10,
                    top: this.state.top + 10
                })
            })
    }

    resetButtonType = () => {
        this.setState({ buttonType: null })
    }

    clickedBtn = event => {
        let targetBtn = event.target.parentElement.getAttribute("data-target");
        this.setState({ buttonType: targetBtn });
    }

    selectedPost = event => {
        let selectedOpt = event.target.value;
        this.setState({ selectedOption: selectedOpt });
    }


    componentDidMount() {
        this.getPosts()
    }


    render() {
        return (
            <div className="row container feed">
                <div className="col s12">
                    <FeedList posts={this.state.posts} selectedOption={this.state.selectedOption} />
                    <FilterPost selectedPost={this.selectedPost} />
                    <Modals buttonType={this.state.buttonType} closeModal={this.resetButtonType} changeState={this.getPosts} />
                    <Buttons activeBtn={this.clickedBtn} />
                    <div className="row">
                        <div className="col s8">
                                    <span className="load-more" onClick={this.getPosts}>Load more posts</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}