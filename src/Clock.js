

import React, { Component } from 'react';


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
    constructor(props) {
        super(props)
        this.state ={
            now: new Date()
        }
    }


    componentDidMount() {
        this.timerID = setInterval( ()=> {
            this.setState({ now : new Date() });
        }, 1000);
    }


    render() {
        return (
            <ActualTime date={this.state.now}/>
        );
    }

}
export default Clock