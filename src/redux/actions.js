import {ADD_TODO, TOGGLE_TODO, SHOW_NOTIFICATION, HIDE_NOTIFICATION, REMOVE_TODO} from "./types";

export const addTodo = (newTodoObject, id) => {
    console.log(newTodoObject);
    return (dispatch) => {
        dispatch({
            type: ADD_TODO,
            payload: newTodoObject
        });
        dispatch(showNotification(`${newTodoObject.title} eklendi`));
    }
};

export const toggleTodo = (id) => {
    return (dispatch) => {
        dispatch({
            type: TOGGLE_TODO,
            payload: id
        });
        dispatch(showNotification("TOGGLE YAPILDI"));
    }
};

/*/// without thunk
export const removeTodo = (id) => {
    return {type: REMOVE_TODO, payload: id}
};*/

// with thunk
export const removeTodo = (id) => {
    return (dispatch) => {
        dispatch({type: REMOVE_TODO, payload:id});
        dispatch(showNotification("TODO SILINDI"));
    }
};


export const showNotification = (content) => {
    return (dispatch) => {
        dispatch({
            type: SHOW_NOTIFICATION,
            payload: content
        });
        setTimeout(() => {
            dispatch(hideNotification());
        },2000)
    }

};

export const hideNotification = () => {
    return {
        type: HIDE_NOTIFICATION
    }
};