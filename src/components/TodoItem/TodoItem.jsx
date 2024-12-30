import React from 'react';
import './TodoItem.css';

function TodoItem({ todo, deleteTodo, toggleTodoStatus }) {
    const statusClass = todo.completed ? 'status-completed' : 'status-in-progress';
    const statusText = todo.completed ? 'Completed' : 'In Progress';

    return (
        <li className="todo-item">
            <span className="todo-text">{todo.text}</span>
            <span
                className={`todo-status ${statusClass}`}
                onClick={() => toggleTodoStatus(todo.id, todo.completed)}
            >
                {statusText}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </li>
    );
}

export default TodoItem;