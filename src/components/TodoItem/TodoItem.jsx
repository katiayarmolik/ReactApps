import React, { useState } from 'react';
import './TodoItem.css';

function TodoItem({ todo, deleteTodo, toggleTodoStatus, updateTodoTitle }) {
    const [isEditing, setIsEditing] = useState(false);
    const [newTitle, setNewTitle] = useState(todo.text);

    const handleSave = () => {
        updateTodoTitle(todo.id, newTitle);
        setIsEditing(false);
    };

    return (
        <li className="todo-item">
            {isEditing ? (
                <input
                    type="text"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    onBlur={handleSave}
                    onKeyDown={(e) => e.key === "Enter" && handleSave()}
                />
            ) : (
                <span
                    className="todo-text"
                    onClick={() => setIsEditing(true)}
                >
                    {todo.text}
                </span>
            )}
            <span
                className={`todo-status ${todo.completed ? 'status-completed' : 'status-in-progress'}`}
                onClick={() => toggleTodoStatus(todo.id, todo.completed)}
            >
                {todo.completed ? 'Completed' : 'In Progress'}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </li>
    );
}

export default TodoItem;
