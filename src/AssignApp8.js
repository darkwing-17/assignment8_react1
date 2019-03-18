import React, { Component } from 'react';
import './reset.css';
import './text.css';
import Clock from './Clock';
import TaskListing from './tasklisting';

// Assignment 8 - React app
// Ed Chu


class AssignApp8 extends Component {


  render() {
    return (

        <div className="AssignApp8">

        <header className="App-header">
            <table>
                <thead>
                <tr>
                    <th>Clock</th>
                    <th><Clock/></th>

                </tr>
                </thead>
            </table>
        </header>
       </div>
    );
  }
}

export default AssignApp8;
