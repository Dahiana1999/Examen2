import React from "react";

const TodoForm = ({ handleChange, addTask, tarea }) => {
  return (
    <div> 
      <form onSubmit={addTask}>
        <input
          type="text"
          value={tarea}
          placeholder="Escribe una tarea"
          onChange={handleChange}
        />
        <button type="submit">Agregar</button>
      </form>
    </div>
  );
};

export { TodoForm };
