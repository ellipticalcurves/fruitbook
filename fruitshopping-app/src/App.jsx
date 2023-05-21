// import { useState } from 'react'
import { useState } from 'react'
import './style.css'
import { NewTodoForm } from './NewTodoForm'
function App() {
  
  const [todos, setTodos] = useState([])

//   function handleSubmit(e) {
//     e.preventDefault()
//     setTodos((currentTodos) => {
//       return [
//         ...currentTodos,
//       {id: crypto.randomUUID(),title:newItem, completed:false}
//     ,]
//   })
//   setNewItem("")
// }
function addTodo(title){
  setTodos((currentTodos) => {
        return [
          ...currentTodos,
        {id: crypto.randomUUID(),title, completed:false}
      ,]
    })
}

function toggleTodo(id, completed){
  setTodos(currentTodos => {
    return currentTodos.map(todo => {
      if (todo.id === id){
        return {...todo, completed}
      }
      return todo
    })
  })
}



function deleteTodo(id) {
  setTodos(currentTodos=>{
    return currentTodos.filter(todo => todo.id !== id)
  })
}

console.log(todos)
  return (
    <>
    <NewTodoForm onSubmit={addTodo} />
    <h1 className='header'>Todo </h1>
     <ul className='list'>
      {todos.length === 0 && "No Todos"}
      {todos.map(todo =>{
        return (      
        <li key={todo.id}>
          <label >
            <input type='checkbox' checked={todo.completed}
            onChange={e => toggleTodo(todo.id, e.target.checked)}
            />
            {todo.title}
          </label>
          <button 
          onClick={()=> deleteTodo(todo.id)} 
          className='btn btn-danger'>Delete</button>
        </li>
        )
      })}
    <li>lul</li>
     </ul>
    </>
  )
}

export default App
