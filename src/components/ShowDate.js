import React, { Component } from 'react';

class ShowDate extends Component {
  constructor() {
    super()
    this.state = {
      date: null,
      month: null,
      year: null,
      dayOfWeek: null
    }
  }

  componentDidMount = () => {
    const today = new Date()
    const dayOfWeekArray = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]
    const monthArray = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"]
    this.setState({
      date: today.getDate(),
      month: monthArray[today.getMonth()],
      year: today.getFullYear(),
      dayOfWeek: dayOfWeekArray[today.getDay()]
    })
  }

  render() {
    return (
      <div>{ this.state.dayOfWeek } { this.state.date } { this.state.month }</div>
    );
  }

}

export default ShowDate;
