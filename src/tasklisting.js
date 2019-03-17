

import React, { useState } from 'react'



const TaskListing = () => {


    const ToDoListData = [
            {id: 1, taskToDo: "Pack bags first"},
            {id: 2, taskToDo: "Have passport and tickets ready"},
            {id: 3, taskToDo: "Confirm accommodations"},
            {id: 4, taskToDo: "Confirm flights"},
    ]
    const [tasks] = useState(ToDoListData)

    return (

    )
}


export default TaskListing