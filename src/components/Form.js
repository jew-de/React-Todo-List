import React from 'react';

const Form = ({ setInputText, inputText, todos, setTodos, setFilter }) => {
    // called when the value of the input field changes
    // change the inputText state to the value of the input
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    };
    // called when the create button is pressed
    // create a new todo:
    // text: value of input
    // completed: false, as it is not completetd by default
    // id: a random number
    // set the inputText state to an empty string
    const addHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, {text: inputText, completed: false, id: Math.random() * 1000, priority: "1"}
        ]);
        setInputText("");
    };
    // called when the value of the select changes
    // set filter state to the value of the select
    const filterHandler = (e) => {
        setFilter(e.target.value);
    };
    return ( 
        <form>
            <input type="text"  onChange={inputTextHandler} value={inputText} className="form-input"></input>
            <button type="submit" onClick={addHandler} className="form-button">Create</button>
            <select onChange={filterHandler} className="form-select">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
            </select>
        </form>
    );
};

export default Form;
