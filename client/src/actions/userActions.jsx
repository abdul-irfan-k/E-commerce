import axios from "axios"
import { loginUser } from "../reducers/userReducer"

export const loginHandler = (userDetail) => async (dispatch) => {
    try {
        const res = await axios.post('http://localhost:8000/login', userDetail)
        console.log("request data is ", res)
        dispatch(loginUser({ 'username': 'irfan' }))

    } catch (error) {
        console.log(error.response)
    }
}


export const signUpHandler = (userDetail) => async (dispatch) => {
    try {
        const res = await axios.post('http://localhost:8000/signup', userDetail)
        console.log("request data is ", res)
        dispatch(loginUser(res.data))

    } catch (error) {
        console.log(error.response)
    }
}

export const sendOtpToVerifyUserHandler = (userDetail) => async (dispatch) => {
    try {
        const res = await axios.post('http://localhost:8000/login', userDetail)
        console.log("request data is ", res)
        dispatch(loginUser({ 'username': 'irfan' }))

    } catch (error) {
        console.log(error.response)
    }
}

export const verifyUserHandler = (userDetail) => async (dispatch) => {
    try {
        const res = await axios.post('http://localhost:8000/verifyAccount', userDetail)
        console.log("request data is ", res)
        dispatch(loginUser({ 'username': 'irfan' }))

    } catch (error) {
        console.log(error.response)
    }
}



export const requestVerifyUserHandler = async (details) => {
    try {
        const res = await axios.post('http://localhost:8000/requestVerifyUser', details)

    } catch (error) {

    }
}