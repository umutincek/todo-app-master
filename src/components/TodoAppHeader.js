import React from 'react';
import TodoAppTitle from "./TodoAppTitle";
import TodoAppAdd from "./TodoAppAdd";

const TodoAppHeader = (props) => {
    return (
        <div>
            <TodoAppTitle title="Todo App" />
            <TodoAppAdd />
        </div>
    );
};

export default TodoAppHeader;