import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { todolistsAPI, TodolistType } from '../../api/todos-api';


const getTodosThunk = createAsyncThunk(
    'todos/getTodos',
    async () => {
        const response = await todolistsAPI.getTodolists()
        return response.data
    }
)

export const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        items: [
            {id: '1', addedDate: '08.06.2022', order: 1, title: 'First todo'}
        ] as TodolistType[]
    },
    reducers: {
        addTodo: (state, action) => {
            state.items.push(action.payload)
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getTodosThunk.fulfilled, (state, action) => {
            state.items = action.payload
        })
    }
})


export const todosReducer = todoSlice.reducer
export const {addTodo} = todoSlice.actions
export const todoThunks = {
    getTodosThunk
}
