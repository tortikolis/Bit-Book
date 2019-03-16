import React, { Component } from "react";
import { Modals } from "./NewPost/Modals";
import { Buttons } from "./NewPost/Buttons";
import { FeedList } from "./FeedList";
import { getAllPosts } from "../../../services/postFetch";
import { FilterPost } from "./FilterPost";
import { MorePosts } from "./MorePosts";

export class Feed extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      buttonType: null,
      selectedOption: null,
      skip: 0,
      top: 10,
      postAmount: 20
    };
  }

  componentDidMount() {
    this.getPosts(this.state.postAmount);
  }

  getPosts = postAmount => {
    getAllPosts(postAmount).then(postList => {
      this.setState({
        posts: postList
      });
    });
  };

  resetButtonType = () => {
    this.setState({ buttonType: null });
  };

  clickedBtn = event => {
    let targetBtn = event.target.parentElement.getAttribute("data-target");
    this.setState({ buttonType: targetBtn });
  };

  selectedPost = event => {
    let selectedOpt = event.target.value;
    this.setState({ selectedOption: selectedOpt });
  };

  loadMorePosts = () => {
    const postAmount = this.state.postAmount;
    const newPostAmount = postAmount + 20;

    this.setState({ postAmount: newPostAmount });
    this.getPosts(newPostAmount);
  };

  render() {
    const { selectedOption, buttonType, posts } = this.state;
    return (
      <div className="row container feed">
        <div className="col s12">
          <FeedList posts={posts} selectedOption={selectedOption} />
          <MorePosts onClickHandler={this.loadMorePosts} />
          <FilterPost selectedPost={this.selectedPost} />
          <Modals
            buttonType={buttonType}
            closeModal={this.resetButtonType}
            changeState={this.getPosts}
          />
          <Buttons activeBtn={this.clickedBtn} />
        </div>
      </div>
    );
  }
}
