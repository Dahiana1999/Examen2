import { useState, useEffect } from "react";
import "./App.css";
import { TodoList } from "./components/TodoList";
import { TodoForm } from "./components/TodoForm";

function App() {
  const [tarea, setTarea] = useState("");
  const [tareas, setTareas] = useState([]);

  const handleChange = (e) => {
    setTarea(e.target.value);
  };
  const addTask = (e) => {
    e.preventDefault();
    if (tarea.trim() === "") {
      alert("No se puede agregar una tarea vacia");
      return;
    }
    const nuevaTarea = {
      id: Date.now(),
      tarea,
      completada: false,
    };
    const totalTareas = [nuevaTarea, ...tareas];
    setTareas(totalTareas);
    setTarea("");
  };

  const borrarTarea = (id) => {
    const tareasActualizadas = tareas.filter((tarea) => {
      return tarea.id !== id;
    });
    setTareas(tareasActualizadas);
  };

// use effect- Local storage
  useEffect(() => {
    const tareasAlmacenadas = JSON.parse(localStorage.getItem("tareas"));
    if (tareasAlmacenadas) {
      setTareas(tareasAlmacenadas);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareas));
  }, [tareas]);
// use effect- Local storage


  return (
    <>
      <header><img src="./src/assets/easy.png" alt="imagen" width="150" height="150"/>Organizador diario</header>
      <div className="dias">
        <button className="diaLunes"><a href="http://localhost:5173/Lunes" className="link" style={{color:"white"}}>Lunes</a></button>
        <button className="diaMartes"><a href="http://localhost:5173/martes" className="link" style={{color:"white"}}>Martes</a></button>
        <button className="diaMiercoles"><a href="http://localhost:5173/miercoles" className="link" style={{color:"white"}}>Miércoles</a></button>
        <button className="diaJueves"><a href="http://localhost:5173/jueves" className="link" style={{color:"white"}}>Jueves</a></button>
        <button className="diaViernes"><a href="http://localhost:5173/viernes" className="link" style={{color:"white"}}>Viernes</a></button>
        <button className="diaSabado"><a href="http://localhost:5173/sabado" className="link" style={{color:"white"}}>Sábado</a></button>
        <button className="diaDomingo"><a href="http://localhost:5173/domingo" className="link" style={{color:"white"}}>Domingo</a></button>
      </div>
      <TodoForm handleChange={handleChange} addTask={addTask} tarea={tarea} />
      {tareas.length > 1 && (
        <button onClick={() => setTareas([])}>Has completado todo</button>
      )}
      
      {tareas.length === 0 ? (
        <p className="AlertaNoTareas">No hay tareas pendientes</p>
      ) : null}

      {tareas.map((tarea) => (
        <TodoList
          key={tarea.id}
          id={tarea.id}
          tarea={tarea}
          borrarTarea={borrarTarea} 
        />
      ))}
    </>
  );
}

export default App;
