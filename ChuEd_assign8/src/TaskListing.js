
import React, {Fragment, useState} from 'react'
import TaskTable from './TaskTable'
import AddTaskForm from './AddTaskForm'
import EditTaskForm from './EditTaskForm'

const TaskListing = () => {
    const tasksData = [];
    const initialFormState = { id: null, taskname:'' };
    const [ tasks, setTasks] = useState(tasksData);
    const [ editing, setEditing ] = useState(false);
    const [ currentTask, setCurrentTask ] = useState(initialFormState);
    const addTask = (task) => {
        task.id = tasks.length + 1;
        setTasks([...tasks, task])
    };

    const deleteTask = (id) => {
        setEditing(false);
        setTasks(tasks.filter((task) => {return task.id !== id}))
    };

    const updateTask = (id, updatedTask ) => {
        setEditing(false);
        setTasks(tasks.map((task) => {return (task.id === id ? updatedTask: task)}))
    };

    const editRow = (task) =>
    {
        setEditing(true);
        setCurrentTask({
            id: task.id,
            taskname: task.taskname
        })
    };
    return (
        <div className="container">
            <div className="flex-row">
                <div className="flex-large">
                    { editing ? (
                        <Fragment>
                            <h2>edit task</h2>
                            <EditTaskForm
                                editing={editing}
                                setEditing={setEditing}
                                currentTask={currentTask}
                                updateTask={updateTask}

                            />
                        </Fragment>
                    ) : (
                        <Fragment>
                            <h2>add task</h2>
                            <AddTaskForm addTask={addTask} />
                        </Fragment>
                    )}
                </div>
                <div className="flex-large">
                    <h2>view tasks</h2>
                    <TaskTable tasks={tasks} editRow={editRow} deleteTask={deleteTask}/>
                </div>
            </div>
        </div>
    )


};
export default TaskListing