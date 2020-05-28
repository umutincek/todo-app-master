import React from 'react';
import propTypes from "prop-types";


const TodoAppTitle = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
        </div>
    );
};

TodoAppTitle.propTypes = {
    title: propTypes.string.isRequired
};

TodoAppTitle.defaultProps = {
  title: "DEFAULT TITLE"
};

export default TodoAppTitle;