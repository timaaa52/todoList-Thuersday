import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {todolistAPI} from "../api/todo-list";
import {taskApi} from "../api/task-api";

export default {
    title: 'API/TASKS'
}


export const GetTasks = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        taskApi.getTasks('0885b1da-d21d-43fe-932f-60c9f886f0fa')
            .then(res => setState(res.data))
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const CreateTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        taskApi.createTask('0885b1da-d21d-43fe-932f-60c9f886f0fa', 'Hello World')
            .then(res => setState(res.data))

    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const DeleteTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        taskApi.deleteTask('0885b1da-d21d-43fe-932f-60c9f886f0fa', '827e7703-d8a0-49b7-bd5c-9a7bf885f8d0')
            .then(res => setState(res.data))

    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const UpdateTask = () => {
    const [state, setState] = useState<any>(null)

    let obj1 = {
        title: 'HELLO PEOPLE',
        description: '',
        completed: false,
        status: 0,
        priority: 0,
        startDate: '',
        deadline: '',
    }

    useEffect(() => {
        taskApi.updateTask('0885b1da-d21d-43fe-932f-60c9f886f0fa', '772e37d2-a8e3-4a21-ae0e-6336d5e89bda', obj1)
            .then(res => setState(res.data))
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
