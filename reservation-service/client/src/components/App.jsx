/*eslint-disable */

import React from "react";
import { Input } from "semantic-ui-react";
import PartySizeMenu from "./PartySizeMenu.jsx";
import TimeMenu from "./TimeMenu.jsx";
import DateMenu from "./DateMenu.jsx";
// import { formatDate } from "react-calendar";
import moment from "moment";
import styles from './index.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.partySizeClickHandler = this.partySizeClickHandler.bind(this);
    this.partySizeStateChanger = this.partySizeStateChanger.bind(this);
    this.timeClickHandler = this.timeClickHandler.bind(this);
    this.timeMenuStateChanger = this.timeMenuStateChanger.bind(this);
    this.dateClickHandler = this.dateClickHandler.bind(this);
    this.dateChanger = this.dateChanger.bind(this);
    this.state = {
      PartySize: "For 3",
      PartySizeMenu: [],
      Date: "Today",
      Calendar: false,
      Time: "7:00 PM",
      TimeMenu: []
    };
  }

  partySizeClickHandler() {
    let arr = [];
    for (var i = 0; i < 20; i++) {
      arr.push(i + 1);
    }
    let obj = Object.assign({}, this.state);
    obj.PartySizeMenu = arr;
    this.setState(obj);
  }
  timeClickHandler() {
    let arr = [];
    for (var i = 0; i < 12; i++) {
      arr.push(i + 1);
    }
    let obj = Object.assign({}, this.state);
    obj.TimeMenu = arr;
    this.setState(obj);
  }
  dateClickHandler() {
    let obj = Object.assign({}, this.state);
    obj.Calendar = true;
    this.setState(obj);
  }

  partySizeStateChanger(size) {
    let obj = Object.assign({}, this.state);
    obj.PartySizeMenu = [];
    obj.PartySize = size ? "For " + size : this.state.PartySize;
    this.setState(obj);
  }
  timeMenuStateChanger(time, tail = "", AM = "") {
    let obj = Object.assign({}, this.state);
    obj.TimeMenu = [];
    obj.Time = time;
    if (tail !== "" && AM !== "") obj.Time = time + ":" + tail + " " + AM;
    this.setState(obj);
  }
  dateChanger(date) {
    let obj = Object.assign({}, this.state);
    obj.Calendar = false;
    let string = "" + date;
    string = moment(string).format("ddd, M/D");
    let today = new Date();
    let todaystring = moment(today).format("ddd, M/D");
    obj.Date = string === todaystring ? "Today" : string;
    this.setState(obj);
  }

  render() {
    return (
      <div id={styles.masterContainer}>
        <div id={styles.containerDiv} />
        <div id={styles.sideBar}>
          <div className={styles.reservationContainer}>
            <div className={styles['hh-header']}>
              <h3> <span>Make a reservation</span></h3>
            </div>
            <div className={styles['main-container']}>
              <div className={styles['party-date']}>
                <div className={styles['party-size']}>Party Size</div>
                <div className={styles['dd-wrapper']}>
              <div className={styles['dd-header']}>
                <div
                  className={styles['dd-header-title']}
                  onClick={this.partySizeClickHandler}
                >
                  {this.state.PartySize}
                </div>
              </div>
              <div className={styles['menu-border']}>
                <ul className={styles['dd-list']}>
                  {this.state.PartySizeMenu.map((e, i) => (
                    <PartySizeMenu
                      key={i}
                      menu={e}
                      stateChange={this.partySizeStateChanger}
                    />
                  ))}
                </ul>
              </div>
            </div>
              </div>
              <div className={styles.whole}>
              <div className={styles['half-left']}>
                <div id={styles['date-label']}>Date</div>
                <div className={styles.date}>
                  <div id={styles.dateContainer} onClick={this.dateClickHandler}>
                    {this.state.Date}
                  </div>
                  <DateMenu
                    Date={this.state.Date}
                    Calendar={this.state.Calendar}
                    stateChanger={this.dateChanger}
                  />
                </div>
              </div>
              <div className={styles['half-right']}>
                <div id={styles['time-label']}>Time</div>
                <div id={styles.timeContainer}>
                  <div
                    className={styles['dd-header-title']}
                    onClick={this.timeClickHandler}
                  >
                    {this.state.Time}
                  </div>
                  <div className={styles['dd-list-time']}>
                    <ul className={styles['dd-list']}>
                      {this.state.TimeMenu.map((e, i) => (
                        <TimeMenu
                          key={i}
                          menu={e}
                          AM={"AM"}
                          currTime={this.state.Time}
                          stateChange={this.timeMenuStateChanger}
                        />
                      ))}
                      {this.state.TimeMenu.map((e, i) => (
                        <TimeMenu
                          key={i}
                          menu={e}
                          AM={"PM"}
                          stateChange={this.timeMenuStateChanger}
                        />
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
              <div id={styles.findATable}>
                <button className={styles.findATableButton}>
                  <span>Find a Table </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
