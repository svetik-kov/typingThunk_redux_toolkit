import React from 'react';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { addTodo, todoThunks } from './features/todos/todosSlice';
import { useDispatch } from 'react-redux';

export const App = () => {

    const dispatch = useAppDispatch()


    const todos = useAppSelector(state => state.todos.items)

    const getTodosHandler = () => {
        dispatch(todoThunks.getTodosThunk())
    }

    const addTodoHandler = () => {
        const newTodo = {id: Math.random(), addedDate: '08.06.2022', order: 1, title: 'Other todo'}
        dispatch(addTodo(newTodo))
    }

    return (
        <div>
            <h1>Todos</h1>
            <div style={{display: 'flex'}}>
                {todos.map((tl) => {
                    return (
                        <div key={tl.id}
                             style={{border: '2px solid black', padding: '10px', width: '200px', margin: '20px'}}>
                            <p>title: {tl.title}</p>
                            <p>addedDate: {tl.addedDate}</p>
                            <p>order: {tl.order}</p>
                            <p>id: {tl.id}</p>
                        </div>
                    )
                })}
            </div>
            <button onClick={addTodoHandler}>Add todolist</button>
            <button onClick={getTodosHandler}>Get todos</button>
        </div>
    )
}


