import { combineReducers } from "redux";
import { loginReducer } from "./login.reducer";

export interface ILoginState {
    id: number
};

export interface IState {
    login: ILoginState
}

export const state = combineReducers<IState>({
    login: loginReducer
})