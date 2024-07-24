import {createSlice} from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit";

export interface IState {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

const initialState: IState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
}

export const profileSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setProfile: (state, action: PayloadAction<IState>) => {
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.email = action.payload.email;
            state.password = action.payload.password;
        },
    }
});

export const {setProfile} = profileSlice.actions;
export default profileSlice.reducer;