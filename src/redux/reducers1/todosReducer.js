import {ADD_TODO, CHANGE_TODO, DELETE_TODO,FILTER_TODO} from "../constants/todosContant1";
const initialState = {
    data: [
        {id: 1, name: "Play game", isCompleted: false},
        {id: 2, name: "Do Homework", isCompleted: false}
    ],
    filter: "all",
    isLoading: false,
    
}
function todosReducer(state = initialState, action)
{
    switch (action.type) {
        case ADD_TODO:
            const id = Math.floor(Math.random() * 100);
            const todo = { name: action.payload.todo, isCompleted: false, id};
            const data = [...state.data, todo];
            return {...state, data};
        case DELETE_TODO: {
            const {id} = action.payload;

            const data = state.data.filter(item => item.id !== id);
            return {...state, data};
        }
        case CHANGE_TODO: {
            const {id} = action.payload;
            const data = state.data.map(item => {
                if(item.id === id) {
                    return {...item, isCompleted: !item.isCompleted};
                }
                return item;
            });
            return {...state, data};
        }
        case FILTER_TODO: {
            const {status} = action.payload;

            return {...state, filter:status}
        }
        default:
            return state;
    }
}

export default todosReducer;