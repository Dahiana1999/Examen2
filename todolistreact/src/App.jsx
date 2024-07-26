import { useState } from 'react'
import './App.css'
import { TodoList } from './components/TodoList'
import { TodoForm } from './components/TodoForm'

function App() {
  const [tarea, setTarea] = useState('');
  const [tareas, setTareas] = useState([]);

  const handleChange = e => {
    setTarea(e.target.value);
  }
const addTask = e => {
  e.preventDefault();
  if(tarea.trim()===''){
    alert('No se puede agregar una tarea vacia');
    return;
  }
  const nuevaTarea = {
    id: Date.now(),
    tarea,
    completada: false
  }
  const totalTareas = [nuevaTarea, ...tareas];
  setTareas(totalTareas);
  setTarea('');
} 

const borrarTarea = id => {
  const tareasActualizadas = tareas.filter(tarea => {
    return tarea.id !== id
  })
  setTareas(tareasActualizadas);
}
  return (
    <>
      <header>Organizador diario</header>
      <TodoForm 
      handleChange={handleChange}
      addTask={addTask}
      tarea={tarea}
      />
      {tareas.length>1 &&(
        <button onClick={() => setTareas([])}>Has completado todo</button>
      )}
      {tareas.length === 0 ? <p className='AlertaNoTareas'>No hay tareas pendientes</p> : null}

      {tareas.map(tarea => (
        <TodoList
          key = {tarea.id}
          id = {tarea.id}
          tarea = {tarea}
          borrarTarea = {borrarTarea}
        />
      ))}      
    </>
  )
}

export default App
