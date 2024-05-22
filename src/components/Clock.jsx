// import React from 'react';
import { useState, useEffect } from "react";

const Clock = () => {

  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);


  const currentTimeString = time.toLocaleTimeString();
  const currentDateString = time.toDateString();

  // export class ClockToggle extends React.Component {
  //   render () {
  //     return (
  //       <button
  //         type="button"
  //         className="clock-toggle"
  //         onClick={this.props.toggleClock}
  //       >
  //         Toggle Clock
  //       </button>
  //     )
  //   }
  // }

  // class Clock extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       time: new Date(),
  //     };
  //   }

  // componentDidMount() {
  //   this.interval = setInterval(this.tick, 1000);
  // }

  // componentWillUnmount() {
  //   console.log("Clearing Clock interval!")
  //   clearInterval(this.interval);
  // }

  // tick = () => {
  //   this.setState({ time: new Date() });
  // }

  // render() {
  //   let hours = this.state.time.getHours();
  //   let minutes = this.state.time.getMinutes();
  //   let seconds = this.state.time.getSeconds();
  //   hours = (hours < 10) ? `0${hours}` : hours;
  //   minutes = (minutes < 10) ? `0${minutes}` : minutes;
  //   seconds = (seconds < 10) ? `0${seconds}` : seconds;

  //   const timezone = this.state.time
  //     .toTimeString() // Form: "14:39:07 GMT-0600 (PDT)"
  //     .replace(/[^A-Z]/g, "") // Strip out all but capitals
  //     .slice(3); // Eliminate initial GMT

  return (
    <div>
      <h1>Clock</h1>
      <p>{currentTimeString}</p>
      <p>{currentDateString}</p>
    </div>
  );
};

const ClockToggle = ({ toggleClock }) => {
  return (
    <button onClick={toggleClock}>
      Toggle Clock
    </button>
  );
};

export { ClockToggle }; // Named export
export default Clock; // Default export
