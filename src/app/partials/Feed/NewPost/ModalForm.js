import React, { Fragment } from "react";

export const ModalForm = props => {
  return (
    <Fragment>
      <h4>New {props.postType} post</h4>
      <p>Post content</p>
      <input
        type="text"
        className={props.className}
        onChange={props.onChangeHandler}
      />
      <p className="error">{props.error}</p>
    </Fragment>
  );
};
