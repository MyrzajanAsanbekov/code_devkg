import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface UserState {
    user: any
}

interface UserState {
    id: number,
    email: string,
    Password: string
}

export const initialState = {
    user: {}
}

export const LoginSlice = createSlice({
    name: "USER_SLICE",
    initialState,
    reducers: {
        addUser(state, action: PayloadAction<any>) {
            state.user = action.payload
        }
    }
})

export const {addUser} = LoginSlice.actions
export default LoginSlice.reducer;
