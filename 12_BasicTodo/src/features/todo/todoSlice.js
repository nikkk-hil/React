import { createSlice, nanoid } from "@reduxjs/toolkit";

// creating a intial state that defines what store will look like at start
const initialState = {
    todos: [{ id: 1, text: "Learn React", isEditable: false }]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,  // payload is the data we pass when we dispatch the action
                isEditable: false // initially, the todo is not editable
            }
            state.todos.push(todo); // push the new todo into the todos array
        },
        removeTodo: (state, action) => {
            const id = action.payload;
            state.todos = state.todos.filter((todoObj) => todoObj.id != id); // filter out the todo with the given id
        },
        updateTodo: (state, action) => {
            const id = action.payload.id;
            const message = action.payload.msg;
            state.todos = state.todos.map((todoObj) => todoObj.id === id ? {...todoObj, text: message} : todoObj);
        },
        toggleIsEditable: (state, action) => {
            const id = action.payload;
            state.todos = state.todos.map(todoObj => todoObj.id === id ? {...todoObj, isEditable: !todoObj.isEditable} : todoObj)
        }
    }
})

export const {addTodo, removeTodo, updateTodo, toggleIsEditable} = todoSlice.actions; // exporting the actions so we can use them in our components

export default todoSlice.reducer; // exporting the reducer so we can use it in our store