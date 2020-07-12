import React, { Fragment } from 'react'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import Todo from './Todo';

function TodoList({ todos, removeTodo, toggleTodo, editTodo }) {
    if (todos.length)
    return (
        <Paper>
            <List>
                {todos.map((todo, i) => {
                    return (
                        <Fragment key={todo.id}>
                            <Todo
                                removeTodo={removeTodo}
                                {...todo}
                                toggleTodo={toggleTodo}
                                editTodo={editTodo}
                            />
                            {i < todos.length - 1 &&
                                <Divider />}
                        </Fragment>
                    )
                })}
            </List>
        </Paper>
    )
    else return null
}

export default TodoList;