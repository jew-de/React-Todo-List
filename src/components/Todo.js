import React from 'react';

const Todo = ({ todo, todos, setTodos }) => {
    // called when delete button is pressed
    // delete the todo of which the delete button got pressed
    const deleteHandler = () => {
        setTodos(todos.filter((item) => item.id !== todo.id));
    };
    // called when complete button is pressed
    // invert the completed property of the todo of which the delete button got pressed 
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
    var classes = todo.completed ? "completed" + " todo" : "" + "todo";
    return (
        <div>
            <li className={classes}>
                {todo.text + " "}
                <button onClick={completeHandler} className="todo-complete-button">{`${todo.completed ? "Uncomplete": "Complete"}`}</button>
                <button onClick={deleteHandler} className="todo-delete-button">Delete</button>
            </li>
        </div>
    );
};

export default Todo;
