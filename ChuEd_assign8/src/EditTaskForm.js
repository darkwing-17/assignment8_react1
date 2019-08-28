import React, { useState, useEffect } from 'react'

const EditTaskForm = (props) =>
{
    const [ task, setTask ] = useState(props.currentTask);

    useEffect( () =>
        {
            setTask(props.currentTask)

        },
        [ props ]
    );
    const handleInputChange = (event) =>
    {
        const { name, value } = event.target;

        setTask({ ...task, [name]: value})

    };


    return(
        <form
            onSubmit={(event) => {
                event.preventDefault();

                props.updateTask(task.id, task)

            }}
        >
            <label>taskname</label>
            <input type="text" name="taskname" value={task.taskname} onChange={handleInputChange} />
            <button>Update user</button>
            <button onClick={() => {return props.setEditing(false)}} className="button muted-button">
                Cancel
            </button>
        </form>
    )

};
export default EditTaskForm
