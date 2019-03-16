import React from "react";

export const SearchPeople = props => (
  <nav>
    <div className="nav-wrapper">
      <form>
        <div className="input-field #00acc1 cyan darken-1">
          <input
            id="search"
            type="search"
            placeholder="Search"
            onKeyUp={props.onSearchHandler}
            required
          />
          <label className="label-icon" htmlFor="search">
            <i className="material-icons">search</i>
          </label>
        </div>
      </form>
    </div>
  </nav>
);
