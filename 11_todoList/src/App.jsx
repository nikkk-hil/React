import { useEffect, useState } from 'react'
import './App.css'
import { TodoForm, TodoItem } from './components'
import { TodoProvider } from './contexts'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev) => [...prev, {id: Date.now(), ...todo}]);
  }

  const updateTodo = (id, todo) => {
    setTodos(prev => prev.map((todoObj) => todoObj.id === id ? todo : todoObj))
  }

  const deleteTodo = (id) => {
    setTodos(prev => prev.filter((todoObj) => todoObj.id != id));
  }

  const toggleComplete = (id) => {
    setTodos(prev => prev.map( (todoObj) => todoObj.id == id ? {...todoObj, isCompleted: !todoObj.isCompleted}: todoObj ))
  }

  //getting todos from local storage

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if (todos && todos.length > 0)
      setTodos(todos);
  }, [])

  // pushing todos to local storage

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])



  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
          <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
              <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
              <div className="mb-4">
                  {/* Todo form goes from here */}
                  <TodoForm />
              </div>
              <div className="flex flex-wrap gap-y-3">
                {/* Loop and add todoItems here */}
                  {todos.map((todoObj) => (
                    <div key={todoObj.id} className='w-full'>

                      <TodoItem todo = {todoObj} />

                    </div>
                  ))}
              </div>
          </div>
      </div>
    </TodoProvider>
  )
}

export default App
