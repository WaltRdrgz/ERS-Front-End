import { ILoginState } from ".";
import { loginTypes } from "../actions/login.action"

const initialState: ILoginState = {
    id: 0
};

export const loginReducer = (state = initialState, action: any) => {
    switch(action.type) {
        case loginTypes.LOGIN_UPDATE:
            return{
                ...state,
                id: action.payload.id
            }
        default:break;
    }
    return state;
}