import { use, useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { addTodo, toggleIsEditable, updateTodo } from '../features/todo/todoSlice'

function AddTodos() {
    const [input, setInput] = useState('');
    const [todoId, setTodoId] = useState();
    const [editable, setEditable] = useState(false);
    const dispatch = useDispatch();
    const todo = useSelector(state => state.todos) // getting todos array through useSelector

    const addTodoHandler = (e) => {
        e.preventDefault();
        dispatch(addTodo(input))
        setInput('')
    }

    const updateTodoHandler = (e) => {
      e.preventDefault();
      dispatch(updateTodo({id: todoId, msg: input}));
      setInput('');
      setEditable(prev => !prev);
    }

    useEffect(() => {
      todo.forEach(element => {
        if (element.isEditable){
          setInput(element.text);
          setTodoId(element.id);
          setEditable(element.isEditable);
          dispatch(toggleIsEditable(element.id)); // toggle the isEditable state to false after setting input
        }
      });
    }, [todo, dispatch]);

  return (
    <form onSubmit={editable ? updateTodoHandler : addTodoHandler} className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        {editable ? "Update Todo" : "Add Todo"}
      </button>
    </form>
  )
}

export default AddTodos