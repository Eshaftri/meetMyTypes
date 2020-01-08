import React, { Component, Fragment } from "react";
import Title from "../../components/Title";
import "./style.css";

export default class extends Component {
  state = {
    new_user: []
  };
  render() {
    return (
      <Fragment>
        <div className="main">
          <Title title="New User" detail="Below are the new users who have recently filled out" />
        </div>
      </Fragment>
    );
  }
}
