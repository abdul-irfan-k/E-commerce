import { createSlice } from "@reduxjs/toolkit";

const adminReducer = createSlice({
    name: 'adminReducer',
    initialState: {},
    reducers: {
        loginAdmin: (state, action) => { },
        logoutAdmin: (state, action) => { },
    }
})


const adminGetUsersReducer = createSlice({
    name: 'adminGetUsersReducer',
    initialState: {},
    reducers: {
        getAllUsers: (state, action) => { },
        getUser: (state, action) => { },
        blockUser: (state, action) => { },

    }
})


const adminGetProductReducer = createSlice({
    name: 'adminGetProductReducer',
    initialState: {},
    reducers: {
        getAllProducts: (state, action) => { },
        getProduct: (state, action) => { },
        editProduct: (state, action) => { },
        addProduct: (state, action) => { },
        deleteProduct: (state, action) => { },
    }
})

const adminGetOrderedProductsReducer = createSlice({
    name: 'adminGetOrderedProductsReducer',
    initialState: {},
    reducers: {
        getAllOrderedProducts: (state, action) => { },
        getOrderedProduct: (state, action) => { },
        editOrderedProduct: (state, action) => { },
        cancelOrderedProduct: (state, action) => { },
    }
})

const adminDeliveryEmployeeReducer = createSlice({
    name: 'adminDeliveryEmployeeReducer',
    initialState: {},
    reducers: {
        getDeliveryEmployees: (state, action) => { },
        getDeliveryEmployee: (state, action) => { },
        addDeliveryEmployee: (state, action) => { },
        deleteDeliveryEmployee: (state, action) => { },
    }
})

const adminGraphReducer = createSlice({
    name: 'adminGraphReducer',
    initialState:{},
    reducers:{
        
    }
})