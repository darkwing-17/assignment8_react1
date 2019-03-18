import React, { Component } from 'react';


class Todo extends Component
{
    componentDidUpdate() {
        this.props.inputElement.current.focus()

    }

    render() {
        return(
            <div className = "todo">
            <div className = "header">
                <form onSubmit={this.props.addItem}>
                    <input
                        placeholder="Task"
                        ref={this.props.inputElement}
                        value={this.props.currentItem.text}
                        onChange={this.props.handleInput}
                    />
                    <button type="submit">Add task</button>
                </form>
            </div>
            </div>
        )
    }
}
export default Todo