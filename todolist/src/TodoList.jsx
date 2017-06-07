import React from 'react';

export default function TodoList(props) {
  return (
    <div>
      <ul>
        {
          props.tareas.map(tarea => (
            <li key={tarea.id}>{tarea.titulo}</li>
          ))
        }
      </ul>
    </div>
  )
}
