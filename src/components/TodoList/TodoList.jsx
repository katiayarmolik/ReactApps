import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import './TodoList.css';

function TodoList({ todos, deleteTodo, toggleTodoStatus }) {
    return (
        <ul className="todo-list">
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    deleteTodo={deleteTodo}
                    toggleTodoStatus={toggleTodoStatus}
                />
            ))}
        </ul>
    );
}

export default TodoList;