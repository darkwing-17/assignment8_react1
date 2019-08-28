import React from 'react'

const TaskTable = (props) => {return (
    <table>

        <thead>
        <tr>
            <th>Taskname</th>
            <th>Actions</th>
        </tr>
        </thead>
        <tbody>
        { props.tasks.length > 0 ? (
            props.tasks.map( (task) => {return (
                <tr key={task.id}>
                    <td>{task.taskname}</td>
                    <td>
                        <button onClick={() => {return props.editRow(task)}} className="button muted-button">edit</button>
                        <button onClick={() => {return props.deleteTask(task.id)}} className="button muted-button">delete </button>
                    </td>
                </tr>
            )})
        ):(
            <tr>
                <td colSpan={3}>no tasks</td>
            </tr>
        )}
        </tbody>
    </table>
)};
export default TaskTable