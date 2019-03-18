// Clock Component

import React, { Component } from 'react';


// Get local time
class TimeLocale extends Component
{
    render(){
        return (
            this.props.date.toLocaleTimeString()
        )
    }
}

class ActualTime extends Component {
    render(){
        return (
            <div className="clock">
                <TimeLocale date={this.props.date}/>
            </div>
        );
    }
}

class Clock extends Component {
    // Designate state as new Date object
    constructor(props) {
        super(props)
        this.state ={
            now: new Date()
        }
    }

    // Count up every second
    componentDidMount() {
        this.timerID = setInterval( ()=> {
            this.setState({ now : new Date() });
        }, 1000);
    }


    // Return time readout as string
    render() {
        return (
            <ActualTime date={this.state.now}/>
        );
    }

}
export default Clock