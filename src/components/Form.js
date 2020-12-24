import React from 'react';

const Form = ({ setInputText, inputText, todos, setTodos, setFilter }) => {
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    };
    const addHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, {text: inputText, completed: false, id: Math.random() * 1000}
        ]);
        setInputText("");
    };
    const filterHandler = (e) => {
        setFilter(e.target.value);
    };
    return ( 
        <form>
            <input type="text"  onChange={inputTextHandler} value={inputText}></input>
            <button type="submit" onClick={addHandler}>Create</button>
            <select onChange={filterHandler}>
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
            </select>
        </form>
    );
};

export default Form;