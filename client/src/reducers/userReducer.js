import { createSlice } from '@reduxjs/toolkit'

export const userReducer = createSlice({
    name: 'userReducer',
    initialState: { user: [] },
    reducers: {
        loginUser: (state, action) => {
            console.log(action)
            state.user = [action.payload]
        },
        logoutUser: (state, action) => {

        },
        editUser: (state, action) => {

        },
        deleteUser: (state, action) => {

        }
    }
})

export const { loginUser, logoutUser, editUser, deleteUser } = userReducer.actions