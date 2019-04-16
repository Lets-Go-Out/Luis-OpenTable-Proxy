/* eslint-disable*/
import React, { Component } from "react";
import Calendar from "react-calendar";
import styles from "./index.css";

class DateMenu extends Component {
  constructor(props) {
    super(props);
    this.mycalendar = React.createRef();
    this.onChange = this.onChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.state = {
      date: new Date()
    };
  }
  componentDidMount() {
    if (this.props.Date !== "Today") {
      this.setState({ date: this.props.Date });
    }
  }
  handleClick(e) {
    if (this.myTime && !this.mycalendar.contains(e.target)) {
      document.removeEventListener("click", this.handleClick, false);
      this.props.stateChanger(this.state.date);
    } else {
      document.removeEventListener("click", this.handleClick, false);
    }
  }
  handleClick2(e) {
    document.removeEventListener("click", this.handleClick, false);
    this.setState({ date: e });
    this.props.stateChanger(e);
  }
  onChange() {
    date => this.setState(formatDate(date, "dd"));
  }

  render() {
    if (this.props.Calendar) {
      document.addEventListener("click", this.handleClick, false);
      return (
        <div ref={mycalendar => (this.mycalendar = mycalendar)} id={styles.mycalendar}>
          <Calendar
            onChange={this.onChange}
            value={this.state.date}
            calendarType="US"
            onClickDay={this.handleClick2}
          />
        </div>
      );
    } else {
      return <div />;
    }
  }
}
export default DateMenu;
