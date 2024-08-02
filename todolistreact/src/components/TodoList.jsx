import React, { useState } from "react";
import "../Task.css";

const TodoList = ({ tarea, borrarTarea }) => {
  const [completada, setCompletada] = useState(false);
  const [editarTarea, setEditarTarea] = useState(false);
  const [guardarTarea, setGuardarTarea] = useState("");

  //editar tarea
  if (editarTarea) {
    return (
      <div>
        <input
          id="editado"
          placeholder={tarea.tarea}
          onChange={(e) => setGuardarTarea(e.target.value)}
        />
        <button id="cancelar" onClick={() => setEditarTarea(!editarTarea)}>
          Cancelar
        </button>
        <button
          id="guardar"
          onClick={() => {
            setEditarTarea(!editarTarea);
            tarea.tarea = guardarTarea;
            setGuardarTarea(guardarTarea);
          }}
        >
          Guardar
        </button>
      </div>
    );
  }

 

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
      <button id="editar" onClick={() => setEditarTarea(!editarTarea)}>
        Editar
      </button>
    </div>
  );
};

export { TodoList };
