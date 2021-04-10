import { NavItem } from "reactstrap";

// const initialState = {
//     data: {salad: 1, cheese: 2, beef: 1},
//     menu: {
//         salad: 15,
//         cheese: 25, 
//         beef: 35,
//     },
//     total: 100,
// }

const initialState = {
    data: [
        {name: "salad", soLuong: 3, gia: 15},
        {name: "cheese", soLuong: 2, gia: 25},
        {name: "beef", soLuong: 1, gia: 35},
    ],
    total: 75,
}
function burgerReducer(state = initialState, action) {
  
    switch (action.type) {
        case "ADD_DETAIL":
            console.log(action);
            // Thay đổi số lượng
            if (action.payload.amount === -1 && state.data.soLuong < 1) {
                return {...state};
            }
            console.log(action.payload.amount);
            const dataUpdate = {...state};
            console.log(dataUpdate);
            state.data.soLuong += action.payload.amount;
       
            // // Thay đổi số lượng
            // if(action.payload.amount === -1 && state.data[action.payload.nameProduct] < 1) {
            //     return {...state};
            // }
            // const dataUpdate = {...state.data};
            // dataUpdate[action.payload.nameProduct] += action.payload.amount;
            // state.data = dataUpdate;// tính tổng tiền
            // state.total += action.payload.amount * state.menu[action.payload.nameProduct];
            return {...state};
    
        default:
            return state;
    }        
    
    
}
   
export default burgerReducer;