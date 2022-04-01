import {instanceAPI} from "./todo-list";
import {AxiosResponse} from "axios";

type propertyObjType = {
    title: string
    description: string
    completed: boolean
    status: number
    priority: number
    startDate: string
    deadline: string
}

type itemsTaskType = {
    addedDate: string
    deadline: string
    description: string
    id: string
    order: number
    priority: number
    startDate: string
    status: number
    title: string
    todoListId: string
}

type getTasksType = {
    items: itemsTaskType[],
    totalCount: number,
    error: string
}

type commonTaskType<T = {}> = {
    data: T
    fieldsErrors: string[]
    messages: string[]
    resultCode: number
}

export const taskApi = {
    getTasks(todoId: string) {
        return instanceAPI.get<getTasksType>(`/todo-lists/${todoId}/tasks`)
    },
    createTask(todoId: string, title: string) {
        return instanceAPI.post<any, AxiosResponse<commonTaskType<itemsTaskType>>, {title: string}>(`/todo-lists/${todoId}/tasks`, {title})
    },
    deleteTask(todoId: string, taskId: string) {
        return instanceAPI.delete<commonTaskType>(`/todo-lists/${todoId}/tasks/${taskId}`)
    },
    updateTask(todoId: string, taskId: string, propertyObj: propertyObjType) {
        return instanceAPI.put<commonTaskType<itemsTaskType>>(`/todo-lists/${todoId}/tasks/${taskId}`, propertyObj)
    },
}