import React, { Component } from "react";
import M from "materialize-css";
import { ALL, TEXT, IMAGE, VIDEO } from "../../../shared/postTypeImages";

export class FilterPost extends Component {
  constructor(props) {
    super(props);
    this.selectFilter = React.createRef();
  }

  componentDidMount() {
    M.FormSelect.init(this.selectFilter.current);
  }

  render() {
    const { selectedPost } = this.props;

    return (
      <div className="input-field col s12 m6" id="filter-select">
        <select
          className="icons"
          ref={this.selectFilter}
          onChange={selectedPost}
        >
          <option value="" data-icon={ALL} defaultValue>
            All Posts
          </option>
          <option value="text" data-icon={TEXT}>
            Text
          </option>
          <option value="image" data-icon={IMAGE}>
            Image
          </option>
          <option value="video" data-icon={VIDEO}>
            Video
          </option>
        </select>
      </div>
    );
  }
}
