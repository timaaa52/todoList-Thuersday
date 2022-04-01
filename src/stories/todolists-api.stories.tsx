import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {todolistAPI} from "../api/todo-list";

export default {
    title: 'API/TODOS'
}


export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistAPI.getTodos()
            .then(res => setState(res.data))
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistAPI.createTodo('REACT 18!!!')
            .then(res => setState(res.data))

    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistAPI.getTodos()
            .then(res => res)
            .then(res => {
                todolistAPI.deleteTodo(res.data[1].id)
                    .then(res => setState(res.data))
            })

       // todolistAPI.deleteTodo('650c66af-7c51-4ac1-90c6-131deab7094a')
       //     .then(res => setState(res.data))

    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistAPI.updateTodo('d2abd016-2a9b-4559-a7c8-2dd40ff6364e', 'New TODOS')
            .then(res => setState(res.data))
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
