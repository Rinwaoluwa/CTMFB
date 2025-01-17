import {createSlice} from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit";

export interface IState {
    phoneNumber: string;
    password: string;
    hideBalance?: boolean;
}

const initialState: IState = {
    phoneNumber: "0123456789",
    password: "aaabbbccc",
    hideBalance: false,
}

export const profileSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setLoginDetails: (state, action: PayloadAction<IState>) => {
            state.phoneNumber = action.payload.phoneNumber;
            state.password = action.payload.password;
        },
        setHideBalance: (state, action: PayloadAction<boolean>) => {
            state.hideBalance = action.payload;
        },
    }
});

export const {setLoginDetails, setHideBalance} = profileSlice.actions;
export default profileSlice.reducer;