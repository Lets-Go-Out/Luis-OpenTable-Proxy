/*eslint-disable */

import React from "react";
import styles from "./index.css";

class partySizeMenu extends React.Component {
  constructor(props) {
    super(props);
    this.myParty = React.createRef();
    this.clickFunction = this.clickFunction.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
  }
  componentWillUnmount() {
    document.removeEventListener("click", this.clickHandler, false);
  }
  clickHandler(e) {
    document.removeEventListener("click", this.clickHandler, false);
    if (!this.myParty.contains(e.target)) {
      //do something
      this.clickFunction(null, this.props.stateChange);
    }
  }
  clickFunction(menu, state) {
    document.removeEventListener("click", this.clickHandler, false);
    state(menu);
  }
  render() {
    document.addEventListener("click", this.clickHandler, false);
    return (
      <li
        ref={myParty => {
          this.myParty = myParty;
        }}
        className={styles["dd-list-item"]} 
        onClick={this.clickFunction.bind(
          this,
          this.props.menu,
          this.props.stateChange
        )}
      >
        {this.props.menu}
      </li>
    );
  }
}

export default partySizeMenu;
