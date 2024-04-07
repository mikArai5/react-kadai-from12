import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Todo } from '../pages/Types'

type State = {
    count: number
    tasks: Todo[]
}

const initialState: State = {
    count: 2,
    tasks: [
        {
            id: 2,
            title: '次のTodo',
            done: false
        }, {
            id: 1,
            title: '次のTodo',
            done: true
        }
    ]
}

const tasksModule = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTodo (state: State, action: PayloadAction<string>) {
            state.count++

            const newTask: Todo = {
                id: state.count,
                title: action.payload,
                done: false
            }

            state.tasks = [newTask, ...state.tasks]
        },
        doneTodo (state: State, action: PayloadAction<Todo>) {
            const task = state.tasks.find(t => t.id === action.payload.id)
            if (task) {
                task.done = !task.done
            }
        },
        deleteTodo (state: State, action: PayloadAction<Todo>) {
            state.tasks = state.tasks.filter(t =>
                t.id != action.payload.id
            )
        }
    }
})

export const {
    addTodo, doneTodo, deleteTodo
} = tasksModule.actions

export default tasksModule