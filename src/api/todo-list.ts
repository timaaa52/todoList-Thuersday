import axios, {AxiosResponse} from "axios";

export const instanceAPI = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1',
    withCredentials: true,
    headers: {
        'api-key': '96f35c30-56a0-4da1-befb-610a09072451',
    }
})

type getTodoType = {
    id: string
    addedDate: string
    order: number
    title: string
}

type commonTodoType<T = {}> = {
    resultCode: number
    messages: string[],
    fieldsErrors: string[]
    data: T
}

export const todolistAPI = {
    getTodos() {
        return instanceAPI.get<getTodoType[]>('/todo-lists')
    },
    createTodo(title: string) {
        return instanceAPI.post<any, AxiosResponse<commonTodoType<getTodoType>>, {title:string}>('/todo-lists', {title})
    },
    deleteTodo(id: string) {
        return instanceAPI.delete<commonTodoType>(`/todo-lists/${id}`)
    },
    updateTodo(todoId: string, title: string) {
        return instanceAPI.put<commonTodoType>(`/todo-lists/${todoId}`, {title})
    }

}