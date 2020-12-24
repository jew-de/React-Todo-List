import React from 'react';

const Todo = ({ todo, todos, setTodos }) => {
    const deleteHandler = () => {
        setTodos(todos.filter((item) => item.id !== todo.id));
    };
    const completeHandler = () => {
        setTodos(todos.map((item) => {
            if(item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                }
            }
            return item;
        }));
    };
    return (
        <div>
            <li className={`${todo.completed ? "completed": ""}`}>
                {todo.text}
            </li>
            <button onClick={completeHandler}>{`${todo.completed ? "Uncomplete": "Complete"}`}</button>
            <button onClick={deleteHandler}>Delete</button>
        </div>
    );
};

export default Todo;