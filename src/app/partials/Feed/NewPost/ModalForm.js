import React, { Fragment } from "react";

export const ModalForm = props => {
  const { postType, className, onChangeHandler, error } = props;
  return (
    <Fragment>
      <h4>New {postType} post</h4>
      <p>Post content</p>
      <input type="text" className={className} onChange={onChangeHandler} />
      <p className="error">{error}</p>
    </Fragment>
  );
};
