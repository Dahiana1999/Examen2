import React, { useState, useEffect } from "react";
import "../Task.css";

const TodoList = ({ tarea, borrarTarea }) => {
  const [completada, setCompletada] = useState(false);
  const [editarTarea, setEditarTarea] = useState(false);
  const [guardar, setGuardar] = useState(false); 

  if (editarTarea) {
    return (  
      <div>
        <input />
        <button id="cancelar" onClick={() => setEditarTarea(!editarTarea)}>Cancelar</button>
        <button id="guardar" onClick={() => setGuardar(!guardar)}>Guardar</button>
      </div>
    );
  } 

//if (guardar) {return ());};
//*

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

