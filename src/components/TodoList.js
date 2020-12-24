import React from 'react';

import Todo from './Todo.js';

const TodoList = ({ todos, setTodos, filteredTodos }) => {
    return (
        <div>
            <ul>
                {filteredTodos.map((todo) => (
                    <Todo 
                        todo={todo}
                        key={todo.id}
                        todos={todos}
                        setTodos={setTodos}
                    />
                ))}
            </ul>
        </div>
    );
};

export default TodoList;