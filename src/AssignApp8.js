import React, { Component } from 'react';
import './reset.css';
import './text.css';
import TaskListing from './tasklisting';

// Assignment 8 - React app
// Ed Chu


class AssignApp8 extends Component {


  render() {
    return (
        <div className="AssignApp8">

        <header className="App-header">
        <TaskListing />
        </header>
       </div>
    );
  }
}

export default AssignApp8;
