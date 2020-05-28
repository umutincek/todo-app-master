import React, {Component} from 'react';
import {connect} from "react-redux";
import {addTodo} from "../redux/actions";
import { Formik } from 'formik';
import * as Yup from "yup";

const todoAddValidation = Yup.object().shape({
    title: Yup.string().required("Title girmeden todo ekleyemezsiniz").max(10, "10 karakterdan fazla giremezsiniz"),
    description: Yup.string().min(5, "5 karakterden az giremezsiniz")
});

class TodoAppAdd extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <Formik
                    initialValues={{
                        title: "",
                        description: "",
                        completed: false,
                        priority: "high"
                    }}
                    validationSchema={todoAddValidation}
                    onSubmit={(values, {resetForm, setSubmitting}) => {
                        setSubmitting(true);
                        setTimeout(() => {
                            this.props.addTodo(values);
                            setSubmitting(false);
                            resetForm({})
                        }, 2000)
                    }}
                >
                    {({
                        values,
                        errors,
                        handleChange,
                        handleSubmit,
                        setFieldValue,
                        isSubmitting
                    }) => {
                        //console.log("HATALAR", errors);
                        console.log("is submitting", isSubmitting);
                        return (<form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="title"
                                        placeholder="Todo Title Giriniz"
                                        value={values.title}
                                        onChange={handleChange}
                                    />
                                    {
                                        errors.title && <div>
                                            <h4 style={{color: "red"}}>{errors.title}</h4>
                                        </div>
                                    }
                                </div>
                                <div className="form-group">
                                    <input type="text"
                                           placeholder="Todo Description Giriniz"
                                           name="description"
                                           value={values.description}
                                           onChange={handleChange}
                                    />
                                    {
                                        errors.description && <div>
                                            <h4 style={{color: "red"}}>{errors.description}</h4>
                                        </div>
                                    }
                                </div>
                                <div className="form-group">
                                    <input type="radio"
                                           name="completed"
                                           id="completed-todo-field"
                                           value={values.completed}
                                           checked={values.completed}
                                           onChange={() => {setFieldValue("completed", true)}}
                                    />
                                    <label htmlFor="completed-todo-field">Completed</label>
                                </div>
                                <div className="form-group">
                                    <input type="radio"
                                           name="completed"
                                           id="uncompleted-todo-field"
                                           value={values.completed}
                                           checked={!values.completed}
                                           onChange={() => {setFieldValue("completed", false)}}
                                    />
                                    <label htmlFor="uncompleted-todo-field">Not Completed</label>
                                </div>

                                <div className="form-group">
                                    <select name="priority" value={values.priority} onChange={handleChange}>
                                        <option value="high">High</option>
                                        <option value="medium">Medium</option>
                                        <option value="low">Low</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <button type="submit" style={{
                                        opacity: (Object.keys(errors).length > 0) || isSubmitting ? "0.2" : "1"
                                    }}>Todo Ekle</button>
                                </div>
                            </form>
                        )}}
                </Formik>
            </div>
        );
    }
}

const mapDispatchToProps = {
    addTodo: addTodo
};

export default connect(null, mapDispatchToProps)(TodoAppAdd);