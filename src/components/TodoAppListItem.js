import React from 'react';
import {connect} from "react-redux";
import {removeTodo, toggleTodo} from "../redux/actions";
import styled from "styled-components";

const myColor = "rebeccapurple";

const StyledListItem = styled.div`
      background: ${myColor};
      color: ${props => props.textColor};
      padding: 10px;
      text-decoration: ${props => (props.completed ? "line-through" : "none")};
      
      &:hover {
        background: brown;
      }
`;


const TodoAppListItem = ({title, id, completed, description, priority, toggleTodo, removeTodo}) => {
    return (
        <StyledListItem textColor="yellow" completed={completed} onClick={() => toggleTodo(id)}>
            <div>
              {title}
            </div>
            <div>
                {description}
            </div>
            <div>
                <strong>Priority</strong>: {priority}
            </div>
            <span>
                <button onClick={(event) => {
                    event.stopPropagation();
                    removeTodo(id);
                }}>Sil</button>
            </span>
        </StyledListItem>
    );
};

const mapDispatchToProps = {
    toggleTodo: toggleTodo,
    removeTodo: removeTodo
};

export default connect(null, mapDispatchToProps)(TodoAppListItem);