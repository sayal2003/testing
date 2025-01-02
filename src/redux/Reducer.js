import { data } from "react-router-dom";

const initialState = {
    data: [],
    editObj:{
       
    }

}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "USER_SUBMIT":
            // console.log(action.payload, "actiondata===========>");

            return {
                ...state,
                data: action.payload
            }
            case "USER_DELETE":   
            // console.log(filterData, "filterdata===========>");
            const filterData = state.data.filter((item, index) => index !== action.payload) 
                return {
                    ...state,
                    data: filterData
                }
                case "USER_EDIT":   
                // console.log(editObj, "finddata===========>");
                const editObj = state.data.find((item, index) => index === action.payload) 
                    return {
                        ...state,
                        editObj
                    }
            break;

        default:
            break;
    }
}

export default userReducer