import React from 'react';

// import components
import Todo from './Todo.js';

const TodoList = ({ todos, setTodos, filteredTodos }) => {
    // loop through todos
    // render a Todo for each todo in the list
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
