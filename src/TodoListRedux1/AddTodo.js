import React, {useState} from 'react'
import {useDispatch} from "react-redux"
import {Input, Button} from "reactstrap"
import {addTodo} from "../redux/actions/todosAction1"
export default function AddTodo() {
    const [todo, setTodo] = useState("");
    const dispatch = useDispatch();

    const handleChange = (evt) => {
        setTodo(evt.target.value);
    }

    const handleAddTodo = () => {
        // const action = {
        //     type: "ADD_TODO",
        //     payload: {
        //         todo,
        //     }
        // };
        dispatch(addTodo(todo));
    }
    return (
        <div className="w-50 d-flex">
            <Input value={todo} onChange={handleChange} className="mr-4"/>
            <Button onClick={handleAddTodo} color="primary">Add</Button>
        </div>
    )
}
