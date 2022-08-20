import React from 'react';

const Display = (props) => {
    const {allTodos, setAllTodos} = props; 

    const todoDelete = (delIdx) => {
        const filterTodos = allTodos.filter((todo, idx) => {
            return idx !== delIdx;
        });
        setAllTodos(filterTodos);
        };
    
    const toggleCompleteHandler = (idx) => {
        const updatedTodos = allTodos.map((todo, i) => {
            if (idx === i) {
            todo.complete = !todo.complete;
        };
            return todo;
        });
    
        setAllTodos(updatedTodos)
    };

    return ( 
    <div>
        {
        allTodos.map((todo, idx) => {
            return( 
            <div key={idx}>
                <input onChange={(e) => {toggleCompleteHandler(idx);}} checked={todo.complete} type="checkbox" />
                <span style={{textDecoration: todo.complete && "line-through"}}>{todo.text}</span>
                <button style={{marginLeft: "10px"}} onClick={(e) => todoDelete(idx)}>delete</button>
            </div>
        );
        })
    }
    </div>
);
};

export default Display;