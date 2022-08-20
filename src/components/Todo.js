import React from 'react';

const Todo = (props) => {
    const {createTodo, setCreateTodo, allTodos, setAllTodos} = props;

    const newTodoHandler = (e) => {
        e.preventDefault();
        if (createTodo.length === 0) {
            return;
        };
    
        const todoItem = {
            text: createTodo,
            complete: false
        }
    
        setAllTodos([...allTodos, todoItem]);
        setCreateTodo("");
        };

    return (
    <div>
        <h1>Make Your To Do List!!!</h1>
        <form onSubmit={newTodoHandler}>
            <input type="text" value={createTodo} onChange = {(e) => setCreateTodo(e.target.value)} />
            <div>
                <button type="submit">Add To List</button>
            </div>
        </form>
    </div>
);
};

export default Todo;