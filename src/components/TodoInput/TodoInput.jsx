import React, { useState } from 'react';
import './TodoInput.css';

function TodoInput({ addTodo }) {
    const [text, setText] = useState("");

    const handleAdd = () => {
        if (text.trim()) {
            addTodo(text);
            setText("");
        }
    };

    return (
        <div className="todo-input">
            <input
                type="text"
                placeholder="Add a new todo"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button onClick={handleAdd}>Add</button>
        </div>
    );
}

export default TodoInput;