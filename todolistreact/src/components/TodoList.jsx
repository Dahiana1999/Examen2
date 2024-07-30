import React, { useState } from "react";
import "../Task.css";

const TodoList = ({ tarea, borrarTarea }) => {
  const [completada, setCompletada] = useState(false);
  const [editarTarea, setEditarTarea] = useState(false);
  const [guardarTareas, setGuardarTareas] = useState("");

 
// EDITAR TAREA 
  if (editarTarea) {
    return (
      <div>
        <input
          id="editar"
          placeholder={tarea.tarea}
          onChange={(e) => setGuardarTareas(e.target.value)}
        />
        <button id="cancelar" onClick={() => setEditarTarea(!editarTarea)}>
          Cancelar
        </button>
        <button id="guardar" inputValue={guardarTareas}  
        onClick={() => setGuardarTareas(guardarTareas)}>
        Guardar
        </button>
      </div>
    );
  }
  if (guardarTareas) {
    return () => {
      setEditarTarea(!editarTarea);
      setGuardarTareas("");
    };
  }

//
  return (
    <div
      className={
        completada
          ? "containerTarea containerTareaCompletada"
          : "containerTarea"
      }
    >
      <ul className={completada ? "completada" : "noCompletada"}>
        {tarea.tarea}
      </ul>
      <button id="completar" onClick={() => setCompletada(!completada)}>
        {completada ? "No completada" : "Completada"}
      </button>
      <button onClick={() => borrarTarea(tarea.id)} id="eliminar">
        Eliminar
      </button>
      <button id="editar" onClick={() => setEditarTarea(!editarTarea)}>Editar</button>
    </div>
  );
};


export { TodoList };

