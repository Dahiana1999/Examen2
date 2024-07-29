import React, { useState } from "react";
import "../Task.css";

const TodoList = ({ tarea, borrarTarea }) => {
  const [completada, setCompletada] = useState(false);

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
    </div>
  );
};

export { TodoList };
