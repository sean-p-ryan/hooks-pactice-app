import React, { Fragment } from 'react'
import useToggleState from './hooks/useToggleState';
import EditTodoForm from './EditTodoForm';
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'

import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'

export default function Todo({ id, task, completed, removeTodo, toggleTodo, editTodo }) {
    const [isEditing, toggleIsEditing] = useToggleState(false);    
    return (
        <div>
            <ListItem style={{height: '64px'}}>
                {isEditing ?
                    <EditTodoForm
                        editTodo={editTodo}
                        id={id} 
                        task={task}
                        toggleIsEditing={toggleIsEditing}/> :
                    <Fragment>
                        <Checkbox
                            tabIndex={-1}
                            checked={completed}
                            onClick={() => toggleTodo(id)} />
                        <ListItemText style={{ textDecoration: completed ? 'line-through' : 'none' }}>
                            {task}
                        </ListItemText>
                        <ListItemSecondaryAction>
                            <IconButton
                                onClick={() => toggleIsEditing()}>
                                <EditIcon></EditIcon>
                            </IconButton>
                            <IconButton
                                onClick={() => removeTodo(id)}
                            >
                                <DeleteIcon></DeleteIcon>
                            </IconButton>
                        </ListItemSecondaryAction>
                    </Fragment>
                }
            </ListItem>
        </div>
    )
}
