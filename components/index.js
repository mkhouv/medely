import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import axios from 'axios';
import Modal from './Modal';
import Nav from './Nav';
import Events from './Events';

class Calendar extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      month: moment(),
      selected: moment().startOf('day'),
      eventList: []
    };
    
    this.previous = this.previous.bind(this);
    this.next = this.next.bind(this);
    this.newEvent = this.newEvent.bind(this);
    this.getEvents = this.getEvents.bind(this);
    this.deleteEvent = this.deleteEvent.bind(this);
  }
  
  previous() {
    const {
      month,
    } = this.state;

    this.setState({
      month: month.subtract(1, 'month'),
    });
  }

  next() {
    const {
      month,
    } = this.state;

    this.setState({
      month: month.add(1,'month'),
    });
  }
  
  select(day) {
    this.setState({
      selected: day.date,
      month: day.date.clone(),
    });
  }

  renderWeeks() {
    let weeks = [];
    let done = false;
    let date = this.state.month.clone().startOf("month").add("w" -1).day("Sunday");
    let count = 0;
    let monthIndex = date.month();

    const {
      selected,
      month,
    } = this.state;

    while (!done) {
      weeks.push(
        <Week key={date} 
          date={date.clone()} 
          month={month} 
          select={(day)=>this.select(day)} 
          selected={selected} />
      );

      date.add(1, "w");
      
      done = count++ > 2 && monthIndex !== date.month();
      monthIndex = date.month();
    }

    return weeks;
  };

  renderMonthLabel() {
    const {
      month,
    } = this.state;

    return <span className="month-label">{month.format("MMM YYYY")}</span>;
  }

  newEvent() {
    let date = this.state.selected.format('MMDDYYYY');
    let that = this;
    axios.post('http://localhost:3333/addEvent',
      {
        date: date,
        start: $('#start-time :selected').text(),
        end: $('#end-time :selected').text(),
        title: $('#title').val()
      }
    ).then(function () {
      $('#start-time').prop('selectedIndex', 0);
      $('#end-time').prop('selectedIndex', 0);
      $('#title').val('');
      that.getEvents(date);
    });
  }

  getEvents(date) {
    axios.get(`http://localhost:3333/${date}`)
      .then(res => {
        this.setState({eventList: res.data});
      });
  }

  deleteEvent() {
    let date = this.state.selected.format('MMDDYYYY');
    let that = this;
    axios.delete(`http://localhost:3333/${date}`).then(function () {
      that.getEvents(date);
    });
  }

  render() {
    return (
      <div>
        <Modal newEvent={this.newEvent} />
        <Nav />
        <section className="calendar">
          <header className="header">
            <div className="month-display row">
              <i className="fa fa-arrow-circle-left fa-2x" onClick={this.previous}/>
              {this.renderMonthLabel()}
              <i className="fa fa-arrow-circle-right fa-2x" onClick={this.next}/>
            </div>
            <DayNames />
          </header>
          {this.renderWeeks()}
          <Events date={this.state.selected} getEvents={this.getEvents} deleteEvent={this.deleteEvent} eventList={this.state.eventList} />
        </section>
      </div>
    );
  }
}

class DayNames extends Component {
    render() {
        return (
          <div className="row day-names">
            <span className="day">S</span>
            <span className="day">M</span>
            <span className="day">T</span>
            <span className="day">W</span>
            <span className="day">T</span>
            <span className="day">F</span>
            <span className="day">S</span>
          </div>
        );
    }
}

class Week extends Component {
  render() {
    let days = [];
    let {
      date,
    } = this.props;
    
    const {
      month,
      selected,
      select,
    } = this.props;

    for (var i = 0; i < 7; i++) {
      let day = {
          name: date.format("dd").substring(0, 1),
          number: date.date(),
          isCurrentMonth: date.month() === month.month(),
          isToday: date.isSame(new Date(), "day"),
          date: date
      };
      days.push(
        <Day key={date} 
          day={day}
          selected={selected}
          select={select}/>
      );

      date = date.clone();
      date.add(1, "day");
    }

    return (
      <div className="row week" key={days[0]}>
        {days}
      </div>
    );
  }
}

class Day extends React.Component {
  render() {
    const {
      day,
      day: {
        date,
        isCurrentMonth,
        isToday,
        number
      },
      select,
      selected
    } = this.props;

    return (
      <span 
        key={date.toString()} 
        id={date.format("MMDDYYYY")}
        className={"day" + (isToday ? " today" : "") + (isCurrentMonth ? "" : " different-month") + (date.isSame(selected) ? " selected" : "")} 
        onClick={()=>select(day)}>{number}</span>
    );
  }
}

ReactDOM.render(<Calendar/>, document.getElementById('app'));
