import React from 'react'
import {ListGroupItem, Button} from "reactstrap"
import {useDispatch} from "react-redux"
import {changeTodo, deleteTodo} from '../redux/actions/todosAction1'
export default function TodoItem({todo}) {
    const dispatch = useDispatch();

    const handleDelete = () => {
        // const action = {
        //     type: "DELETE_TODO",
        //     payload: {
        //         id: todo.id,
        //     }
        // };
        dispatch(deleteTodo(todo.id));
    }

    const handleChangeStatus = () => {
        const action = {
            type: "CHANGE_TODO",
            payload: {
                id: todo.id,
            }
        };
        dispatch(changeTodo(todo.id));
    }
    return (
        <ListGroupItem className="d-flex align-items-center justify-content-between">
            <span style={{textDecoration: todo.isCompleted ? "line-through" : "none"}}>{todo.name}</span>
            <div>
                <Button onClick={handleChangeStatus} color={todo.isCompleted ? "warning" : "success"} className="mr-4">{todo.isCompleted ? "Cancel" : "Complete"}</Button>
                <Button onClick={handleDelete} color="danger">Delete</Button>
            </div>
        </ListGroupItem>
    )
}
