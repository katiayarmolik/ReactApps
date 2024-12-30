import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import './TodoList.css';

function TodoList({ todos, deleteTodo, toggleTodoStatus, updateTodoTitle }) {
    if (!todos.length) {
        return <p className="todo-list__empty">No todos found. Add some tasks!</p>;
    }

    return (
        <ul className="todo-list">
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    deleteTodo={deleteTodo}
                    toggleTodoStatus={toggleTodoStatus}
                    updateTodoTitle={updateTodoTitle}
                />
            ))}
        </ul>
    );
}

export default TodoList;
