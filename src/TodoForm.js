import React from 'react';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import useInputState from './hooks/useInputState';


export default function TodoForm({ addTodo }) {
    const [value, handleChange, reset] = useInputState("");

    return (
        <div>
            <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    addTodo(value);
                    reset();
                }}>
                    <TextField value={value} onChange={handleChange} margin='normal' label='Add new todo' fullWidth/>
                </form>
            </Paper>
        </div>
    )
}
