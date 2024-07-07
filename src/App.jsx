import { useState, useEffect } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"


function App() {
const [todos, setTodos] = useState([])
const [todoValue, setTodoValue] = useState('');

    function persistData(newList) {
      localStorage.setItem('todos', JSON.stringify({todos: newList}));
    }

    function handleAddTodos(newTodo) { 
      const newToDoList = [...todos, ...newTodo]
      persistData(newToDoList);
      setTodos(newToDoList);
    }
    function handleEditTodos(index) {
      const valueToBeEdited = todos[index]
      setTodoValue(valueToBeEdited);
      handleRemoveTodos(index);
    }

    function handleRemoveTodos(index) {
      const newTodoList = todos.filter((todo, todoIndex) =>{
        return todoIndex != index
      })
      persistData(newTodoList);
      setTodos(newTodoList);
    }
    useEffect(() => {
      if(!localStorage) {
        return 
      }

      let localTodos = localStorage.getItem('todos');
      if(!localTodos) {
        return
      }
      localTodos = JSON.parse(localTodos).todos;
      setTodos(localTodos);
    },[]);
  return (
    <main>
      <TodoInput handleAddTodos={handleAddTodos} todoValue={todoValue} setTodoValue={setTodoValue}/>
      <TodoList todos={todos} handleRemoveTodos={handleRemoveTodos} handleEditTodos={handleEditTodos}/>
    </main>
  )
}

export default App
